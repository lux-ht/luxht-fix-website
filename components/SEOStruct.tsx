export default function SEOStruct() {
    const mainBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': ['LocalBusiness', 'HomeAndConstructionBusiness', 'Organization'],
        '@id': 'https://fix.luxht.com/#localbusiness',
        name: 'LUXHT Fix',
        alternateName: 'LUXHT Fix Orlando',
        url: 'https://fix.luxht.com/',
        logo: {
            '@type': 'ImageObject',
            url: 'https://fix.luxht.com/images/logo-wide-hammers.png',
            width: 800,
            height: 800,
        },
        image: 'https://fix.luxht.com/images/logo-wide-hammers.png',
        description: 'Professional home services division of LUXHT Luxury Home Transformations, bringing construction-level expertise to repairs and maintenance in Orlando, FL.',
        slogan: 'Construction professionals. Not just handymen.',
        telePresencePage: 'https://fix.luxht.com/',
        telephone: '+1-407-720-7476',
        priceRange: '$$',
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
        areaServed: {
            '@type': 'GeoCircle',
            geoMidpoint: {
                '@type': 'GeoCoordinates',
                latitude: '28.6256',
                longitude: '-81.3631',
            },
            geoRadius: '50000',
        },
        sameAs: [
            'https://www.facebook.com/luxht',
            'https://www.instagram.com/luxht',
            'https://www.linkedin.com/company/luxht',
        ],
        parentOrganization: {
            '@type': 'Organization',
            name: 'LUXHT - Luxury Home Transformations',
            url: 'https://luxht.com/'
        },
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-407-720-7476',
            contactType: 'customer service',
            areaServed: 'US',
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
