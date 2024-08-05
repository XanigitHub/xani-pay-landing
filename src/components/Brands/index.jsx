import netflixLogo from '../../assets/img/brands/Rectangle 161.svg';
import forbesLogo from '../../assets/img/brands/Rectangle 164.svg';
import itelLogo from '../../assets/img/brands/image 35.svg';
import fedexLogo from '../../assets/img/brands/Rectangle 162.svg';
import audiomackLogo from '../../assets/img/brands/Rectangle 163@2x.svg';
import penguinesLogo from '../../assets/img/brands/Group 191.svg';
import circleLogo from '../../assets/img/brands/Ellipse 91.svg';
import gotomeetingLogo from '../../assets/img/brands/image 36.svg';

const Brands = () => {
    const logos = [
        { src: netflixLogo, alt: 'Netflix' },
        { src: forbesLogo, alt: 'Forbes' },
        { src: itelLogo, alt: 'Itel' },
        { src: fedexLogo, alt: 'FedEx' },
        { src: audiomackLogo, alt: 'Audiomack' },
        { src: penguinesLogo, alt: 'Penguines' },
        { src: circleLogo, alt: 'Circle' },
        { src: gotomeetingLogo, alt: 'GoToMeeting' },
    ];

    return (
        <div className='container mx-auto my-0 pt-14'>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
                {logos.map((logo, index) => (
                    <div key={index} className="flex justify-center items-center bg-[#F1FAF9] rounded-lg p-4">
                        <img src={logo.src} alt={logo.alt} className="max-h-12" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Brands;
