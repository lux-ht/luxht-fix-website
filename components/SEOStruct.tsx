export default function SEOStruct() {
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Luxht',
        url: 'https://fix.luxht.com',
        logo: 'https://fix.luxht.com/luxht-logo.jpg',
        sameAs: [
            'https://www.facebook.com/luxht',
            'https://www.instagram.com/luxht',
            'https://www.linkedin.com/company/luxht',
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-407-720-7476',
            contactType: 'customer service',
            areaServed: 'US',
            availableLanguage: ['English', 'Spanish'],
        },
    };

    const localBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'LUXHT Fix',
        image: 'https://fix.luxht.com/luxht-logo.jpg',
        description:
            'Professional handyman and home repair services in Orlando, FL. Specializing in drywall repair, TV mounting, flooring, deck building, and more.',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Orlando',
            addressRegion: 'FL',
            addressCountry: 'US',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: '28.5383',
            longitude: '-81.3792',
        },
        url: 'https://fix.luxht.com',
        telephone: '+14077207476',
        priceRange: '$$',
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                ],
                opens: '08:00',
                closes: '18:00',
            },
        ],
        areaServed: {
            '@type': 'GeoCircle',
            geoMidpoint: {
                '@type': 'GeoCoordinates',
                latitude: '28.5383',
                longitude: '-81.3792',
            },
            geoRadius: '50000',
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(localBusinessSchema),
                }}
            />
        </>
    );
}
