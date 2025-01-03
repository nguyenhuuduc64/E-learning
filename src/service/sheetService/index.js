const sheetId = '1aFLWwj6Hct1pFcJAqeKt_xDSCzlEN6RwcQuYzrtr8rY'; // Thay bằng Sheet ID
const apiKey = 'AIzaSyC1TmM97RdPCO_48gl6bIhrXbi4jKcmdFU'; // Thay bằng API Key
const range = 'elearning!A2:H100'; // Tùy chỉnh phạm vi dữ liệu

/**
 * Fetch data from Google Sheets
 * @returns {Promise<Array>} The array of data from the Google Sheet
 */
export const fetchData = async () => {
    try {
        const response = await fetch(
            `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`,
        );
        const data = await response.json();
        if (data.values) {
            return data.values;
        } else {
            console.error('No data returned:', data);
            return [];
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};
