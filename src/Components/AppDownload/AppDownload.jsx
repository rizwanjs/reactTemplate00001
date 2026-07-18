import appleStore from '../../assets/apple-store.webp'
import playStore from '../../assets/play-store.webp'

function AppDownload() {
  return (
    <section className="mt-16 bg-gray-50 rounded-md p-8 flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">Get the Shopingo app</h3>
        <p className="text-sm text-gray-500 mt-1">
          Faster checkout, exclusive offers, and order tracking on the go.
        </p>
      </div>
      <div className="flex items-center gap-3">
        <a href="#" aria-label="Download on the App Store">
          <img src={appleStore} alt="App Store" className="h-10" />
        </a>
        <a href="#" aria-label="Get it on Google Play">
          <img src={playStore} alt="Google Play" className="h-10" />
        </a>
      </div>
    </section>
  )
}

export default AppDownload;
