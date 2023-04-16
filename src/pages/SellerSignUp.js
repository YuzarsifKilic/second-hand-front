import {Card} from "antd";

export default function SellerSignUp() {
    return (
    <div className={"mt-36 ml-60 w-4/6 flex justify-center"}>
        <Card>
            <div className={"grid grid-cols-2 gap-8 mt-12"}>
                <div>
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Kullanıcı Adı
                    </label>
                    <div className="mt-2 w-96">
                        <input
                            type="text"
                            name="brand_model"
                            id="brand_model"
                            autoComplete="price"
                            placeholder={"yuzarsif"}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Telefon Numarası
                    </label>
                    <div className="mt-2 w-96">
                        <input
                            type="text"
                            name="brand_model"
                            id="brand_model"
                            autoComplete="price"
                            placeholder={"555 555 55 55"}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className="col-span-full">
                    <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                        Adres Bilgisi
                    </label>
                    <div className="mt-2">
                            <textarea
                                id="details"
                                name="details"
                                rows={3}
                                className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                                defaultValue={''}
                            />
                    </div>
                </div>
                <div>
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Email
                    </label>
                    <div className="mt-2 w-96">
                        <input
                            type="text"
                            name="brand_model"
                            id="brand_model"
                            autoComplete="price"
                            placeholder={"example@gmail.com"}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Parola
                    </label>
                    <div className="mt-2 w-96">
                        <input
                            type="text"
                            name="brand_model"
                            id="brand_model"
                            autoComplete="price"
                            placeholder={"Parola"}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className="mt-6 flex items-center ml-96 gap-x-10">
                    <button
                        type="submit"
                        className="rounded-md bg-sky-800 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Kayıt Ol
                    </button>
                </div>
            </div>
        </Card>
    </div>
)
}