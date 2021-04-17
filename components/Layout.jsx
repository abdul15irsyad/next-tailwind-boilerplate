export default function Layout({ children }) {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="md:container md:mx-auto p-5">
                {children}
            </div>
        </div>
    )
}
