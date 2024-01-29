import { useId } from "react";
import React from "react";

export default function Inputbox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption=[],
    selectedCurrency='usd',
    amountDisabled = false,
    currencyDisabled = false,
    className = ''
}){
    const id = useId()
    return ( 
        <div className={`bg-blue-400 p-3 rounded-lg text-sm flex${className}`}>   
            <div className="w-1-2">
                <label className="text-black/40 mb-2 inline-block" htmlFor={id}>{label}</label>
                <input className="outline-none w-full bg-transparent py-1.5"
                 id={id} type="number" placeholder="Amount"
                 disabled={amountDisabled} value={amount} 
                 onChange={(e) => {onAmountChange && onAmountChange(Number(e.target.value))}}></input>
            </div>

            <div className="w-1/2 flex flex-wrap justify-end text-right"> 
                <p className="text-black/40 mb-2w-full">Currency Type</p>
                <select className="rounded-lg px-1 py-1 bg-gray-200 cursor-pointer outline-none"
                value={selectedCurrency}
                onChange={(e) => {onCurrencyChange && onCurrencyChange(e.target.value)}}
                disabled={currencyDisabled}>
                    {currencyOption.map((currency) => (
                        <option key={currency} value={currency}>{currency}  </option>
                    ))}
                </select>
            </div>
        </div>
    ) 
}

