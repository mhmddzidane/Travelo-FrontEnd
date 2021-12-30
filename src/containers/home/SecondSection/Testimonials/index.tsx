import TestimonialsCard from "./TestimonialsCard"

const Testimonials = () => {
    return(
        <>
            <h3 className="text-heading-3 font-bold font-label pt-14 mb-1">Testimonial Pelanggan</h3>
            <p className="mb-4 text-heading-4">Pendapat pelanggan tentang kami</p>
            <div className="flex justify-between">
            {Array.from({length : 4}).map((_, index) => (
                <TestimonialsCard key={index}/>
            ))}
        </div>
        </>
    )
}

export default Testimonials