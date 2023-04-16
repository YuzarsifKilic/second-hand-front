import {ListBox} from "primereact/listbox";
import {useState} from "react";

export default function FilterDemo() {

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

    const [selected, setSelected] = useState(null);

    return (
        <div className={"card flex justify-content-center mt-16 w-72 ml-3 bg-gray-700"}>
            <ListBox
                value={selected}
                onChange={(e) => setSelected(e.value)}
                options={cpus}
                optionLabel={"label"}
                className={"w-full md:w-14rem"}
            />
        </div>
    )
}