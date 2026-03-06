export default function SEOStruct() {
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': 'https://fix.luxht.com/#organization',
        name: 'LUXHT Fix',
        alternateName: 'LUXHT Fix Orlando',
        url: 'https://fix.luxht.com/',
        logo: {
            '@type': 'ImageObject',
            url: 'https://fix.luxht.com/images/logo-wide-hammers.png',
            width: 800,
            height: 800,
        },
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
        '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
        '@id': 'https://fix.luxht.com/#localbusiness',
        name: 'LUXHT Fix',
        alternateName: 'LUXHT Fix Orlando',
        image: 'https://fix.luxht.com/images/logo-wide-hammers.png',
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
        url: 'https://fix.luxht.com/',
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

    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': 'https://fix.luxht.com/#website',
        name: 'LUXHT Fix',
        url: 'https://fix.luxht.com/',
        publisher: {
            '@id': 'https://fix.luxht.com/#organization',
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
                    __html: JSON.stringify(organizationSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(localBusinessSchema),
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
