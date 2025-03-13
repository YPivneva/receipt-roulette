export default function Footer() {
    return (
        <footer className="page-footer">
            <div className="container">
                <p>© {new Date().getFullYear()} год</p>
            </div>
        </footer>
    );
}