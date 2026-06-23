export default function SEOStruct() {
    const mainBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': ['LocalBusiness', 'HomeAndConstructionBusiness', 'Organization'],
        '@id': 'https://fix.luxht.com/#localbusiness',
        name: 'LUXHT Fix',
        alternateName: 'LUXHT Fix',
        legalName: 'LUXURY HOME TRANSFORMATIONS LLC',
        url: 'https://fix.luxht.com/',
        logo: {
            '@type': 'ImageObject',
            url: 'https://fix.luxht.com/images/logo-wide-hammers.png',
            width: 800,
            height: 800,
        },
        image: 'https://fix.luxht.com/images/logo-wide-hammers.png',
        description: 'Professional property maintenance, repairs, installations, and improvement services for residential and commercial properties across South Florida and Central Florida. Family-owned. Fully insured.',
        slogan: 'Property Maintenance & Improvement. Family-Owned. Not a Lead App.',
        foundingDate: '2024',
        email: 'info@luxht.com',
        telephone: '+1-954-300-3043',
        priceRange: '$$',
        knowsAbout: ['Property Maintenance', 'Residential Maintenance', 'Commercial Property Maintenance', 'Rental Turnover Repairs', 'Fence & Gate Repair', 'Gutter Guard & Cleaning', 'Pressure Washing', 'Accent Walls & Custom Trim', 'Drywall Repair', 'TV Mounting', 'Flooring Installation', 'Kitchen Refacing', 'Deck Building', 'Furniture Assembly', 'Door and Lock Installation', 'Hurricane Damage Repair', 'Stucco Repair', 'Screen Enclosure Repair'],
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Maitland',
            addressRegion: 'FL',
            postalCode: '32751',
            addressCountry: 'US',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: '28.6256',
            longitude: '-81.3631',
        },
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
        areaServed: [
            {
                '@type': 'GeoCircle',
                geoMidpoint: {
                    '@type': 'GeoCoordinates',
                    latitude: '28.6256',
                    longitude: '-81.3631',
                },
                geoRadius: '50000',
            },
            {
                '@type': 'GeoCircle',
                geoMidpoint: {
                    '@type': 'GeoCoordinates',
                    latitude: '26.0031',
                    longitude: '-80.2241',
                },
                geoRadius: '60000',
            },
        ],
        sameAs: [
            'https://www.facebook.com/luxht',
            'https://www.instagram.com/luxht',
            'https://www.linkedin.com/company/luxht',
        ],
        parentOrganization: {
            name: 'LUXURY HOME TRANSFORMATIONS LLC',
            url: 'https://luxht.com/'
        },
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-954-300-3043',
            contactType: 'customer service',
            areaServed: {
                '@type': 'Country',
                name: 'US'
            },
            availableLanguage: ['English', 'Spanish'],
        },
    };

    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': 'https://fix.luxht.com/#website',
        name: 'LUXHT Fix',
        url: 'https://fix.luxht.com/',
        publisher: {
            '@id': 'https://fix.luxht.com/#localbusiness',
        },
        potentialAction: {
            '@type': 'SearchAction',
            target: 'https://fix.luxht.com/?s={search_term_string}',
            'query-input': 'required name=search_term_string',
        },
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        '@id': 'https://fix.luxht.com/#breadcrumb',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'LUXHT Fix',
                item: 'https://fix.luxht.com/',
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(mainBusinessSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema),
                }}
            />
        </>
    );
}
