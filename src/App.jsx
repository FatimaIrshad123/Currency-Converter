import { useState } from 'react'
import Inputbox from './components/inputbox'
import useCurrencyinfo from './hooks/useCurrencyinfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to,setTo] = useState('inr')
  const [convertedAmount,setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyinfo(from)
  //console.log(currencyInfo)
  const options = Object.keys(currencyInfo)
//console.log(options)

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }


  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
 
  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'>
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-50 rounded-lg p-5 backdrop:blur-sm bg-white/30'>
          <from onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}>
            <div className='w-full mb-1'>
               <Inputbox 
               label='from' amount={amount} 
               currencyOption={options}
               onCurrencyChange={(currency) => setFrom(currency)}
               onAmountChange={(amount)=> setAmount(amount)}
               selectedCurrency={from}>
               </Inputbox>
            </div>

            <div className='relative w-full h-0.5'>
              <button onClick={swap} 
              className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
              >Swap</button>
            </div>

            <div className='w-full mb-1'>
               <Inputbox 
               label='to' amount={convertedAmount} 
               amountDisabled
               currencyOption={options}
               onCurrencyChange={(currency) => setTo(currency)}
               selectedCurrency={to}>
               </Inputbox>
            </div>

            <div>
              <button type='submit' onClick={convert} className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>Convert {from} to {to}</button>
            </div>
          </from>
        </div>
      </div>
      
      
    </div>
  )
}

export default App
