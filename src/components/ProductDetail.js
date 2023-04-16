import ProductProperties from "./ProductProperties";
import {NavLink} from "react-router-dom";

export default function ProductDetail() {

    const product = {
        id: 1,
        brand_name: "ASUS",
        brand_model: "Titan GT77",
        short_details: "Temiz PC",
        seller_username: "Yusuf",
        price: 15000,
        photo_url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgUFhYVFRgVGhoaHBoaGRocGhgcGhoaGhoZGBkcIS8nHB4rHxoYJjgnKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHz8nJSQ6NDY0PTE1PT0+PzY9NjQ3NDQxNjY9NTQ0MTQxNDY0NDE7NDQ9NDQ0NDQ6PTQ0NDQ2NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgIDBAUHAQj/xABOEAACAQIDAwgGBQgFCwUAAAABAgADEQQSIQUxUQYHIkFhcYGREzJCUqGxcoKSotEUIzNTYsHC4RbS0/DxNENEY4OTo7LD4uMVF1Rkc//EABoBAQADAQEBAAAAAAAAAAAAAAADBAUCAQb/xAAsEQEAAgIBAgUCBQUAAAAAAAAAAQIDESEEMQUSQVFhE4EUIjJxkUKhscHw/9oADAMBAAIRAxEAPwDs0REBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQPJDtrcv6FGs9H0VZ2pmxKhbX4C5v8ACTGcT5dUcm0a3BwjjxRQfiGkvT0jJkis9pE3wvLz0gY08HiXC6n1dPjMGrznIpscNUBHUWt/DINgdqPSYFToCGynVCRexZdxteSWnWweNULUApVje7C+ZmsNQALMS1+idwAtvmhk8Prjnc7mPj/ZXvz2Zp51k/8Ajt9s/wBSWW52R1YYeNRv7ORPbnJerQu1s6D2lBy67r3Gl5G6lMiQW6WscxO4Xa9NW0b5dMPO1/8AXUfXY/wiWzztH9SvxP7xOYsspKzj6NSemiHS6vO09ujSUHiVJ+GcSwediv7lP/dn+0nOssZZ1GCso7YYh0L/AN1sR7iH6n/klVLnTxDMAVpoCdWyE2HGwYkzneWAJ1+Gq5ild8uqbQ5YbQSmtZBTqUmAPpEXRbgGzgjTf3dW8EDQ1OczHdTIO5E/esjOz9pVKXqsQpIzJc5XAINmAO42F7Wm8XA4fGC9JhQxB302t6NzxQqOiTqbW0tu6zx9CI7wsxgx2jcL7c5OP/WAfUp/1JaPOHtE/wCkW/2dL+zkbxuBqUmKVFZGG8MLHv7R2zGE6jDT2RzhrXvCV/042g3+ksO5KY+SzrHILaj4jBU6lRs1QF1ZrAXKsQCbaXy5ZwJGnXOZ3E3oV6V/Uqh+4OgHzQyLPjitYmIR5qVisTEOjxESsrkREBERAREQEREBERA8nJOdajlxlJ/fpZe8o7f1xOtznHO4pUYSuALpUZdQCOkAwBB0I6BneK3lyVn2kc4Yyg1JtGFGtutQfgT+bY9h3oe+47RNdjMK9NsrqVPzHEHcR2ifTWs7xTy2+D5UVlUU3Yut+vVwD6wUniOPymwr7Iw+KXPh2CuTYUSRm0Gt7ngMxbdIYxldDFOjBkYqR1g2Mz8vxw1MVtRpd2jsupRYq6sD2jeOIPWJgFJLcHt6nVOXFAZdSMq2Uux6dRwGBLEaAggA20tL+P5KZlNXDMK1O53aMLG1l16QB0vpc7gZW3G+Via1mI3x/j+UJKTzLM6thipIItbQ9h4GWcksUrtUzUmvdYyy6mFdlLgEhd9urtI327ZdSiSQACSdABqSeAEk2zuStcWdnFEjUdbjvA0Hn4SzEVjuz7W12Q8rPAxElu08FhkcK7DP126IvxYKCEv2eUj+0sKUa2TICNOlmDDiG3N4Ty2OJjh3iyWlscDtxXU08UprI25/86hsBmVvasPZP7zenafJxghr4djiKAPrqOkulyGUai3Wd0j5mbszatXDuKlJyrDyYcGXcw75W8mlicm45YoE6LzO4q2IrU/fpBvFHt8nMh+2tp0q5V0oLRc3z5T0HPvKvs/3375tebjFZNo0OD+kQ/WQkfeVZD1FfyTKG87rLvkREzlYiIgIiICIiAiIgIiICQjnaw+bAF/1VSm/m3o/45N5H+XWGz7PxS2vakzgdtPpi3bdREDhAeZ2F2oyrkcCpT9x72Hah3qe0fGapGuBKrz6KtvNSJ91inHLY4rDU2UvSe2XVkcgOPonc47tezrmpaXCZTaRXqsRfl4rTa7K2tVokFGYWv0bnKbqQTYHQ2J1Gomtp0SxsBewv/hxldNDewBPd2aypaup5Wsd5mEj25tpMQQ3o1RrakWuey43gdv+OkNPWW1Bkz5D7EDuKzi6IeiD7bDr+iPnbtktckVr+yLqLRFfiG95JclloUxXrD864uqn/NqRvN9zEb+G7jNLt/b5d/yfCgsxNi6i5Y9YTs/a8uM2W3trVsbV/I8J0l3O40UgaG7dSDj7XVfrzqeHw2zVCKDXxLjcou7X7NcifE267aRVyTvduZn0Y9pnfKJYfkrkUviDqNSuayr9N/w8zNdtPaCBMtJAadypYqQhJG5dxvpe510k6XYbV3H5W6u5GdMMjBVVRbpNrdrXFzrvtc3tIjy8Po6lOmtlKAtZRYLc2UKOq2U+cu4csXny95d0nmEKeUTZeg9JqVyH39Ah+kDoO8eU124xavKeZ1L0TP2LivRYihVvYU6tNiewOM1+y156HpVPWy0n47qbd49g9o07BMXGYVkujixIv2EHcQRoQeIkOam6S8i/miYfUUTA2LivS4ejV/WU0fxZQT85nzGQkREBERAREQEREBERATHxtEPTdDudWU/WBH75kRA+bdk4R/RlwiuEJR1OpFrE3X1gP2hwOsrfCo/6M5W/VuR9x9zdxse+V4zNQxuJVGKlK9SxGhAzsR4WIm1p1sPV/TLlc+2g6J+kg+a2PYZtdN5vpRPov0itqR7ozURlJVgVI0IIsR3gws3G2sFU6LHKyABUdDdLC9hfeDv0Os1KjKdZNMvYxW9VyixUhhoQbiSFkouq1qVQU64Nyh06Q61bd+PXLKYahXA9EfRVDvRz0Sf2GJvc8D5zW4zCPTYq6lWHUfmOI7ZDaK2Wq1msccpxg8JhcSmd6eSops+Q5SDxtuIO8EgzLx9VqrLgMIMiqAtR+pF61v8APrJNuM57s/aT0XDgk20KkmxW98vZN6u2Xps1fDP0XOZ6bDVSd5NtSO0GVppMTwhyRFo37JNtbbFLZ1L8lwlmrH9JUNjlPFuL8F3L8DDxt+qub0fQd9Xqnp1nJ33c+qOxQN2875sF5UYap/lGGUnrZLXP/KfiZnYXE7FzAsrqd9n9MV8bXB7rybDStY5rNp9WZenPEtvzbYFlSrjHvmqdFWY3JVdWbMd4LWH1DOc7f2j+UYipVGqs1l+gui+YF/GS7lVy1pvROGwt8rLlZ8pVVTcURSAdRpewAB0v1c7Z5Z6ek1tbJeNTPaPh7WJjlJqWwKlah6Wky1CPWRT0l320OjE2JsNZGXwzBsrAqQbEHQiZ+y9r1aDZqbMp7Dv7DxktoY/DY664gClVY6VQNOoAEcLDr47xO+3zHx3j7eqLLky73PLU7MxdKgmZEXP7zAMfC+6aLauLatUNRmLM3WeA3CSDbHJerQ1tmQ7nXUW7R7PjNDUw5HVOskUvTzUOmxatNu8y7VzZ4r0mzqHFAyH6jso+FpK5zrmdxN8PiKRP6OtmHYHRf4ledFnzlo1aYSTGp09iInLwiIgIiICIiAiIgIiIHAuX1AptTEjqcU6g7jTQH7yvNUjSWc7OHy7QoP8AraOXxR318nXykcTCzd8OtE4Z+JWsFLW/SqwePamSUa19CDqrDgynQiZVTCJiEZkQ0HRSxuPzTWFyAx1Vjw1HdLaIia2zHtmLtLaLMuQHTgNB5Se9InlqzSK0/NPPw0617TdYLbpyhKy+mpi9lYnMt+tX3g/CaBKRJmzweD11lG067vemw5ck6js277HWsC+GfPbU020qqO7cw7VmPh9g1GBJOW3ZrNns90pkFR0hubrHdw75t6Va43yfHXazfoorvzIvR5M1m32UcTMulyTN+lUAHYNZKFq6TGr1D1SzWJjs+T8Rplx3/LOoajEcm6ardWYntkZxeDKta26TF65mox+ssUp5o1ZS6bqckW1ado4yWlyg9pdxCTGykSjkicduG5WaWjaX7E5S1Ka+jLFkOhUncOvLfdN5X2dh8QpeiQjWuynd224AcTOdJUtM/C7UCe2B4zib115onU/93T4YpFueE55uUNDHV6LAr6aglTXS/o3K7u6pOoicb5McpRV2jhLtc2rUybWuHTMLm2pzUx5zscxs07vMqfUxEZZ1rXwqiIkaAiIgIiICIiAiIgIiIHLueejYYOt7tV0v9IK3/TMhTP2zpPPFQzbPL/qqtN/MlP45xl9qsfZHmTNLoOpx4otF579lnBm+nEw2tV5iVEvMBtoOfdHh+MqRqzagORvuF06+u3YfKWr+IYfSJ/hL+Jr67lnUaczUHhI+1RtLsdRf1uPcZReUr9XS08VWcXis4o1WP7pQuJRTq6D6wl4bZpr7d+4E/ukSDSukjMQqqzsdwUFie4DUxXr7VjVYh5fxfLftEJT/AEiQbs58PxMttymG8IT3sB8gZrsLybx1T1cJiD9Km6DzcAGbbC83m0334daf06lP5KSZzPiGafWI+zOz5Zz/AKoYFflC7bkRfEn8Jh1dq1G61HcPxvJEeb+on6fGYGh9KqSfIhbyn+jezk1q7VRgOqjSLH7QZvlI56vNP9U/bhWrhpXtCKPiWPtGW2qHifOSwJsKnqau0MR2BVQHuuqEeJnn/r2yUH5rZlSof9diGHwBcfCRWyXt3mZ/eUiHu88pgubIC54KCx8hJb/T1E/yfZuz6J4smc+YyG8orc5m0SLI9KiOFOigt9vNIxpeT9RqWNw7FSjU69PMHGUgZ1DAhrW6JO/jPqCfJ+1dp169U1q7Gq7KFJZVUkDdcKAD1zrnIfnKw4oUqGLaolRFymoy5kcAnLdluQQuUEkeMDqkTFwOPpVkD0qiVFPtIwYeYmVAREQEREBERAREQERECN84OGz7NxQ92kz/AO7tU/gnzcjXvY7jafRvODXqJgaj02dCCl2UkFVzrmOYagWvc8JwHa2Jdmtd3C8WLWvY6BjAtUMBVcZlQlfeNlU232ZiAZeXZbkdJqS26jURvghaYVDFMBuGp6/5Sp8U9uoX7PxgZq7PQetXT6iux8A6oPjLqYGlvL1H7AiJ97M/ymqFZj7RB7NB428J69M6Zs30ukR8YG29Hh13qT/+lQfDIE+MycByiOFJfDGlSdhlLhS7W3kBqhawJAvbgJHyijeABxWx8Tv+E9tY9p3FdLeAtAkOJ5bY5wQ2Lrm/uMEP3MtpqMVj6lQWqPUqD/WVGf8A5iZiqlns2t/eA/ilVPcR1eNvgDApUEbgqj+/CHDDebX4LKx6mvHQjUfPd4Ss+z1HiP5AE+EChaXAk93V3gSsUV37xx6/EE3EusLPc6dp/wC/90qpqdRqO69vIAgf30gW1oi2thwP8raecNSA3qPnfvDH5S4iXWw0t5eRb5jwlSYgDokgdl9PDKIFhVFrADXfaxHitrjuBgt5DcN48QxuIaqpOuo4gG47OkflPFpg+rcd9j8oGTgsQ9Jg9JnR/fpsym3A5QDbs1EnexecbG07Csq4hR1sMj/aUW81kETDE2sQLcL28joJkpgSTcsTftgdr2Vy/wAFWsGY0W4VBYeDi6+ZElNOoGAKkEHUEG4I4gjfPnQYVrcbcT++ZGBxeIw7Z6NSrTO8hH6LfSQ3VvEQ9jT6Iicp2Xzl10suIoioPeTot4qeix7ssmuyOWGDxFgtUIx9ioMjX4C+jH6JMPEhiIgIiICIiBbqIGBUgEEEEEXBB0II6xOPcrOamopargWzLe/oXNmXspudGHANY9pnZYgfJuIRkc06yNSdTYhlKsD+0phgRv1HH+f4z6Y5Q8mcLjUy4imHIHRYaOn0XGo7tx6wZyPlNzbYvDXfDk4qiL3UKPTKvao9e3FdT7sCCoRa27xJ+AnmTSwsRx3H56eU8Cht3RYXBU7wRvHZ1zwkroQB4QDHcN4HVofkLy5kJ6YBZRa5tcDh60sBzxlJgX1NrkWseq4B8v8ACEdRfXf2GWIVrQMhaygWsWHcPnvnpxBtbJp+0SfnLauJVA99M/7I7h+MpDNuzNbgDYT2eEwPCnWbmeFJ6XE9QE7gx7hA8WZVGW1oN1i3eRL1FQTlBzN7qgsfIQM2iZnUzMRcNVAuKTgcXtTH/EKzZYTYOMqWyJoetVd/vIhX70D1DPHcDeQPGbnDc3eNf1y6g8cijzzuR9mbfC804I/OVB29J3P3fRj4QILWxSDewmvqbQQmwOY8BqfITsGF5q8CpzPnc8DlynwYM33pI8HyUwdMWSgv1izDyYkQOTcjq21mdFwy4haRIzGqpFAKD0v0gtu6k1ndZbSmFACgAAWAAsAOAA3S5AREQEREBERAREQIryo5D4TG3Z19HV6q1Oyv9bqcd/gROT8peQeMwoLEDEUl9tBbKOLKT0fl2mfQUQPkwpw6t4OhHYb/AL5bIn0Fyn5u8LirsqihU95BZT3qN3hprcgzl20+QOOovl9A2IUbmQX+XV5HsECGmeqhO4E9wvJng+ROOe2XDIl/fDqR9pAL+M3uF5sMY/r1VQcLKpHcVzg/CBzRcI59kjvsPnLgwpBALoCeq9z4Cdm2dzV0kN6lU1N2jKWt5tlPikkuF5H4ZAAA1h1KwpgeFILA4FS2HUb2KxHHIUX7T6fGZuD5M1H9RFY7rBy5HeKIefQFDYeGQgihSzD2igZvtNc/GbICBwzB83uKYjoMo67U1Xyao6kfYM3FPmvrZSSyMeoVKz2/4dMW8zOuRA5ZhObCroXqYSnb3KDVm8HrPv7csk2yeQ1GkbvVr4jS2Ryi0x2inTVR53ktiBhYXZdCnrTo0kPFUUHzAvM2IgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIH//2Q==",
        cpu_brand: "intel",
        cpu_brand_model: "i7-13700k",
        cpu_speed: 3.2,
        gpu_brand: "MSI",
        gpu_brand_model: "GeForce RTX 4090 SUPRIM X",
        gpu_size: 6,
        ram_size: 32,
        screen_size: 17,
        model_year: 2022,
        resolution: " 2560 x 1600",
        details: "2 Ay kullandım 0 gibi. Garantisi hala devam ediyor. Herhangi bir sıkıntısı yok."
    }


    return (
        <div className={"mt-24 ml-24 h-screen rounded-xl border mr-24 grid grid-cols-2 bg-white"}>
            <div className={"flex mt-48 flex-wrap justify-center"}>
                    <div className={"flex h-96 justify-items-center border border-gray-300 bg-white rounded-2xl p-12"}>
                        <img src={product.photo_url} style={{height: "300px", width: "300px"}} />
                    </div>
            </div>
            <div className={"mt-12 divide-y"}>
                <div>
                    <div>
                        <div className={"font-semibold text-2xl"}>
                            {product.short_details}
                        </div>
                        <div className={"mt-4"}>
                            <div className={"flex justify-start gap-3"}>
                                <div>
                                    Satıcı:
                                </div>
                                <div className={"semibold text-gray-400"}>
                                    {product.seller_username}
                                </div>
                            </div>
                        </div>
                    </div>
                <div className={"semibold text-cyan-800 mt-3"}>
                        <p>
                            {product.brand_name}
                        </p>
                        <p>
                            {product.brand_model}
                        </p>
                </div>
                    <div className={"grid grid-cols-2"}>
                        <div className={"border border-gray-300 w-24 p-3 mt-3 rounded-xl text-green-400 hover:bg-gray-100 mb-2"}>
                            {product.price} tl

                        </div>
                        <NavLink to={"/message"}>
                        <div>
                            <button
                                className={"bg-sky-800 rounded-xl p-3 w-36 hover:bg-sky-600 text-white"}
                            >
                                Anlaş
                            </button>
                        </div>
                        </NavLink>
                    </div>
                </div>
                <div>
                    <div className={"font-semibold mt-4"}>
                        Detaylar
                    </div>
                    <div className={"mt-4 grid grid-cols-2 gap-4 mr-2"}>
                        <ProductProperties prop_name={"İşlemci Markası"} prop={product.cpu_brand} />
                        <ProductProperties prop_name={"İşlemci Modeli"} prop={product.cpu_brand_model} />
                        <ProductProperties prop_name={"İşlemci Hızı"} prop={`${product.cpu_speed} GHz`} />
                        <ProductProperties prop_name={"Erkan Kartı Markası"} prop={product.gpu_brand} />
                        <ProductProperties prop_name={"Ekran Kartı Modeli"} prop={product.gpu_brand_model} />
                        <ProductProperties prop_name={"Ekran Kartı Hafızası"} prop={`${product.gpu_size} GB`} />
                        <ProductProperties prop_name={"Ram"} prop={`${product.ram_size} GB`} />
                        <ProductProperties prop_name={"Ekran Boyutu"} prop={`${product.screen_size} inç`} />
                        <ProductProperties prop_name={"Çözünürlük"} prop={product.resolution} />
                        <ProductProperties prop_name={"Model Yılı"} prop={product.model_year} />
                    </div>
                </div>
                <div className={"mt-4"}>
                    <div className={"mt-4 font-semibold"}>
                        Ürün Açıklaması
                    </div>
                    <div className={"mt-4"}>
                        {product.details}
                    </div>
                </div>
            </div>
        </div>
    )
}