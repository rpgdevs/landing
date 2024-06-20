import { google } from 'googleapis';

export async function post({ request }) {
    const { fullname, phoneNumber, email, business, help } = await request.json();

    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.GOOGLE_CLIENT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const range = 'Sheet1!A:E';
    const valueInputOption = 'USER_ENTERED';

    const values = [
        [fullname, phoneNumber, email, business, help],
    ];

    try {
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.SHEET_ID,
            range: range,
            valueInputOption: valueInputOption,
            resource: {
                values: values,
            },
        });

        console.log('Data successfully appended!', response.data);
        return {
            status: 200,
            body: { success: true },
        };
    } catch (err) {
        console.error('Error appending data:', err);
        return {
            status: 500,
            body: { success: false, error: err.message },
        };
    }
}
