import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Code = () => {
    const red = useNavigate()
    const [Item, setItem] = useState({
        code: "",
        type: "free delevery",
        per: 0,
        used: false
    });
    const categories = ["descouante", "free delevery"]


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://daily-api-tan.vercel.app/code', Item)
                .then(() => {
                    red('/codes')
                })
        } catch {
            console.log('a');

        }
    };

    return (
        <div className="w-full h-dvh flex justify-center items-center bg-gray-50">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col bg-white p-5 w-11/12 md:w-6/12 rounded-2xl shadow-2xl border border-gray-300"
            >
                {/* Name Input */}
                <input
                    value={Item.code}
                    onChange={(e) => setItem({ ...Item, code: e.target.value })}
                    type="text"
                    placeholder="Enter item name"
                    className="w-full bg-gray-100 px-5 py-2 rounded-2xl border border-gray-400 my-2"
                />


                <label className="my-2">
                    <span>Code type:</span>
                    <select
                        value={Item.type}
                        onChange={(e) => setItem({ ...Item, type: e.target.value })}
                        className="w-full bg-gray-100 px-5 py-2 rounded-2xl border border-gray-400 my-2"
                    >
                        <option value="" disabled>
                            -- Select a category --
                        </option>
                        {categories.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </label>
                {Item.type == "descouante" && <input
                    value={Item.per}
                    onChange={(e) => setItem({ ...Item, per: Number(e.target.value) })}
                    type="number"
                    placeholder="%"
                    className="w-full bg-gray-100 px-5 py-2 rounded-2xl border border-gray-400 my-2"
                />}
                <button
                    type="submit"
                    className="bg-[#dd2a5b] text-white font-semibold py-2 rounded-2xl hover:bg-[#c0254e] transition duration-300"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};


export default Code