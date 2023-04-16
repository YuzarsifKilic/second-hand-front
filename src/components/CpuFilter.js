import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import {useStateContext} from "../contexts/ContextProvider";

const cpus = [
    {brand: "intel", brand_model: "i7-13700k"},
    {brand: "intel", brand_model: "i5-13600k"},
    {brand: "intel", brand_model: "i9-13900k"},
    {brand: "intel", brand_model: "i9-13900k"},
    {brand: "intel", brand_model: "i9-13900k"},
    {brand: "intel", brand_model: "i9-13900k"},
    {brand: "intel", brand_model: "i9-13900k"},
    {brand: "intel", brand_model: "i9-13900k"},
    {brand: "intel", brand_model: "i9-13900k"},
    {brand: "intel", brand_model: "i9-13900k"},
    {brand: "intel", brand_model: "i9-13900k"},
    {brand: "intel", brand_model: "i9-13900k"}
]

export default function CpuFilter() {
    const [selected, setSelected] = useState(cpus[0])

    const {brand, setCpu} = useStateContext();

    return (
        <div className={brand ? "mt-72 w-72 ml-3" : "mt-8 w-72 ml-3"}>
            <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                    <Listbox.Button type={"button"} onClick={() => setCpu((prev) => !prev)} className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        <span className="block truncate">{selected.brand} {selected.brand_model}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
              />
            </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {cpus.map((cpu, cpuId) => (
                                <Listbox.Option
                                    key={cpuId}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                            active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                        }`
                                    }
                                    value={cpu}
                                >
                                    {({ selected }) => (
                                        <>
                      <span
                          className={`block truncate ${
                              selected ? 'font-medium' : 'font-normal'
                          }`}
                      >
                        {cpu.brand} {cpu.brand_model}
                      </span>
                                            {selected ? (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
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
            </Listbox>
        </div>
    )
}