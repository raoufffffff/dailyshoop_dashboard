import axios from "axios";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../components/loading";

const Codes = () => {
    const [coodes, setcoodes] = useState([]);
    const [Loading, setLoading] = useState(true);

    useEffect(() => {
        const getcoodes = async () => {
            try {
                const res = await axios.get("https://daily-api-tan.vercel.app/code");
                setcoodes(res.data.result);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        getcoodes();
    }, []);

    return (
        <div className="w-full min-h-screen bg-gray-100 p-6">
            {Loading ? (
                <div className="flex justify-center items-center h-full">
                    <LoadingSpinner />
                </div>
            ) : (
                <>

                    {/* Page Title */}
                    <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
                        Codes
                    </h1>

                    {/* Responsive Grid of Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {coodes.map((e) => (
                            <div
                                key={e._id}
                                className="bg-white rounded-xl shadow-md p-4 flex flex-col"
                            >
                                {/* Code Title */}
                                <h1 className="text-xl font-semibold text-gray-800 mb-2">
                                    {e.code}
                                </h1>

                                {/* Code Type */}
                                <h2 className="text-gray-600 mb-1">Type: {e.type}</h2>

                                {/* Optional Percentage */}
                                {e.per > 0 && (
                                    <h3 className="text-gray-600 mb-1">Percentage: {e.per}%</h3>
                                )}

                                {/* Used / Not Used Badge */}
                                <span
                                    className={`inline-block px-2 py-1 mt-auto text-sm font-medium rounded-md ${e.used
                                        ? "bg-red-100 text-red-600"
                                        : "bg-green-100 text-green-600"
                                        }`}
                                >
                                    {e.used ? "Used" : "Not Used"}
                                </span>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Codes;
