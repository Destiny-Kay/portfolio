export default function Footer() {
    const date = new Date()
    const year = date.getFullYear()
    return(
        <footer>
            <p>Designed and developed by Destiny</p>
            <p>&copy;{year}</p>
        </footer>
    )
}