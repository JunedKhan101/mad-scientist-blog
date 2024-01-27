export default function formatDate(postedat: string) {
    if (postedat) {
        var formattedCreatedAtDate;
        var date = new Date(postedat);
        // Define an array of month names
        const monthNames = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        const day = date.getDate();
        const month = date.getMonth(); // Month is zero-based (0 = January, 1 = February, etc.)
        const year = date.getFullYear();
        formattedCreatedAtDate = `${day} ${monthNames[month]} ${year}`;
        return formattedCreatedAtDate;
    }
    else {
        return null;
    }
}