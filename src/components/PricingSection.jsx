import React, {useState} from 'react'

const PricingSection = () => {
    const [productCount, setProductCount] = useState(1);

    //calculate product price based on product count
    const starterPrice = Math.round (4000 * (productCount / 50));
    const businessPrice = Math.round (4000 * (productCount / 50));

  return (
    <section className='py-2 px-4'>
        <div className='max-w-6xlmx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold text-center mb-16'>Pricing</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
                {/* strarter plan */}
                <div className='bg-white p-8 rounded-lg shadow-lg'>
                    <h3 className='text-xl text-gray-600 mb-4'>Starter</h3>
                    <p className='text-3xl font-bold mb-6'>${starterPrice}/mo</p>
                </div>

                {/* business plan */}
                <div className='bg-white p-8 rounded-lg shadow-lg'>
                    <h3 className='text-xl text-gray-600 mb-4'>Business</h3>
                    <p className='text-3xl font-bold mb-6'>${businessPrice}/mo</p>
                </div>
            </div>

            <div className='max-w-xl mx-auto'>
                <p className='text-center text-gray-600 mb-4'>{productCount}100 products</p>

                <div className='relative px-4'>
                    <div className='flex items-center gap-2'>
                        <span className='text-xs sm:text-sm text-gray-600'>1</span>
                        <input 
                        className='flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer'
                        type="range" min='1' max='50' 
                        value={productCount} 
                        onChange={(e) => setProductCount
                        (parseInt(e.target.value))}/>
                        <span className='text-xs sm:text-sm text-gray-600'>50</span>
                    </div>
                </div>

                <div className='text-center mt-12'>
                    <p className='text-xl text-gray-600 mb-4'>Ready to get started</p>
                    <button className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer'>Get Started</button>
                </div>
            </div>

        </div>
    </section>
  )
}

export default PricingSection