const SCOPES = 'https://www.googleapis.com/auth/spreadsheets'
const CLIENT_ID = '273246445488-8t29c3tjflb0dp0nuo2nhojn3iiur16p.apps.googleusercontent.com'

let tokenClient = null
let accessToken = null

export function initGoogleAuth() {
  return new Promise((resolve) => {
    const script = document.createElement('script')
    script.src = 'https://accounts.google.com/gsi/client'
    script.onload = () => {
      tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        callback: (response) => {
          accessToken = response.access_token
        },
      })
      resolve()
    }
    document.head.appendChild(script)
  })
}

export function signIn() {
  return new Promise((resolve, reject) => {
    if (!tokenClient) {
      reject(new Error('Auth not initialized'))
      return
    }
    tokenClient.callback = (response) => {
      if (response.error) {
        reject(response)
        return
      }
      accessToken = response.access_token
      resolve(response)
    }
    tokenClient.requestAccessToken()
  })
}

export async function appendToSheet(sheetId, data) {
  if (!accessToken) {
    throw new Error('Not signed in')
  }

  const range = 'Sheet1!A:G'
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}:append?valueInputOption=USER_ENTERED`

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      values: [data],
    }),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.error?.message || 'Failed to write to sheet')
  }

  return response.json()
}

export function isSignedIn() {
  return !!accessToken
}
