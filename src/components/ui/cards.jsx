    import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
    import { Badge } from "@/components/ui/badge"
    import { Eye, Download, Upload } from "lucide-react"

    export default function Cards({ title, status, expires, remaining }) {
    const getStatusColor = (status) => {
        switch (status) {
        case "Valid":
            return "bg-green-100 text-green-700 border-green-300"
        case "Expiring":
            return "bg-yellow-100 text-yellow-700 border-yellow-300"
        case "Expired":
            return "bg-red-100 text-red-700 border-red-300"
        default:
            return "bg-gray-100 text-gray-700 border-gray-300"
        }
    }

    return (
        <Card className="bg-[var(--color-bg2)] text-[var(--color-text1)] border border-[var(--color-bg1)] shadow-[var(--shadow-two)] hover:shadow-[var(--shadow-three)] transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-base font-semibold">{title}</CardTitle>
            <Badge className={`text-xs px-2 py-0.5 border ${getStatusColor(status)}`}>
            {status}
            </Badge>
        </CardHeader>

        <CardContent className="text-sm space-y-1">
            <p className="text-[var(--color-tex2)]">Expires: {expires}</p>
            <p
            className={`font-medium ${
                status === "Valid"
                ? "text-green-600"
                : status === "Expiring"
                ? "text-yellow-600"
                : "text-red-600"
            }`}
            >
            {remaining}
            </p>
        </CardContent>

        <CardFooter className="flex justify-end gap-2">
            <button className="p-2 rounded-md hover:bg-[var(--color-bg1)]">
            <Eye className="w-4 h-4" />
            </button>
            <button className="p-2 rounded-md hover:bg-[var(--color-bg1)]">
            <Download className="w-4 h-4" />
            </button>
            {(status === "Expired" || status === "Expiring") && (
            <button className="flex items-center gap-1 px-3 py-1 rounded-md bg-[var(--color-black)] text-white text-sm hover:bg-gray-800">
                <Upload className="w-4 h-4" />
                Update
            </button>
            )}
        </CardFooter>
        </Card>
    )
    }
