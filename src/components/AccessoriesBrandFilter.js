import {Fragment, useState} from "react";
import {Listbox, Transition} from "@headlessui/react";
import {CheckIcon, ChevronUpDownIcon} from "@heroicons/react/20/solid";

export default function AccessoriesBrandFilter() {

    const brands = [
        {brand_name: "Logitech"},
        {brand_name: "Corsair"},
        {brand_name: "Steelseries"},
        {brand_name: "ASUS"},
        {brand_name: "MSI"},
        {brand_name: "HyperX"}
    ]

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const [selected, setSelected] = useState(brands[0]);

    return (
        <Listbox value={selected} onChange={setSelected}>
            {({open}) => (
                <>
                    <Listbox.Label className={"block text-sm font-medium leading-6 text-gray-900 mt-20 ml-16"}>
                        Markalar
                    </Listbox.Label>
                    <div className={"relative mt-2 ml-12 w-72"}>
                        <Listbox.Button className={"relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"}>
                            <span className={"flex items-center"}>
                                <span className={"ml-3 block truncate"}>{selected.brand_name}</span>
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </span>
                        </Listbox.Button>
                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {brands.map((brand) => (
                                    <Listbox.Option
                                        key={brand.brand_name}
                                        className={({ active }) =>
                                            classNames(
                                                active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                                                'relative cursor-default select-none py-2 pl-3 pr-9'
                                            )
                                        }
                                        value={brand}>
                                        {({selected, active}) => (
                                            <>
                                                <div className={"flex- items-center"}>
                                                <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}>
                                                    {brand.brand_name}
                                                </span>
                                                </div>
                                                {selected ? (
                                                    <span
                                                        className={classNames(
                                                            active ? 'text-white' : 'text-indigo-600',
                                                            'absolute inset-y-0 right-0 flex items-center pr-4'
                                                        )}
                                                    >
                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox>
    )
}