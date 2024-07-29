import {HeroSection, ImageGrid, Testimonials, SignIn, Footer} from '../components/Home';

const Home = () => {
    return <>
        <HeroSection />
        <div className="mx-auto max-w-7xl px-6 pt-24 sm:pt-32 lg:px-8">
            <ImageGrid />
        </div>
        <div className="mx-auto max-w-7xl px-6 pt-24 sm:pt-32 lg:px-8">
            <Testimonials />
        </div>
        <div className="mx-auto max-w-7xl pt-24 sm:pt-32 px-6 lg:px-8 bg-gray-50">
            <SignIn />
        </div>
        <div className="mx-auto max-w-7xl px-6 pt-24 sm:pt-32 lg:px-8">
            <Footer />
        </div>

    </>
};

export default Home;
