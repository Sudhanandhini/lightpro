import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="bg-ink py-32 text-center text-white">
      <div className="wrap">
        <p className="eyebrow justify-center">Error 404</p>
        <h1 className="h1 mx-auto mt-6 max-w-[16ch] !text-white">That page is not part of the stack</h1>
        <p className="mx-auto mt-5 max-w-[46ch] text-white/50">
          The link may be out of date. Start again from the home page, or tell us what you were
          looking for and we will point you at it.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/" className="btn-primary">Back to home</Link>
          <Link to="/contact" className="btn-light">Contact us</Link>
        </div>
      </div>
    </section>
  )
}
