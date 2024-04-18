const menus = [
    {
        id: 1,
        name: 'Home',
        links: '/',
    },
    {
        id: 2,
        name: 'About',
        links: '#',
        namesub: [
            {
                id: 1,
                sub: 'Annual Reports',
                links: '/annualreport'
            },
            {
                id: 2,
                sub: 'Awards',
                links: '/comming-soon'
            },
        ],
    },
    {
        id: 3,
        name: 'Avenues',

        links: '/blog',
        namesub: [
           
            {
                id: 1,
                sub: 'Club Service',
                links: '/avenueDetail/club-service'
            },
            {
                id: 2,
                sub: 'Community Service',
                links: '/avenueDetail/community-service'
            },
            {
                id: 3,
                sub: 'International Service',
                links: '/avenueDetail/international-service'
            },
            {
                id: 4,
                sub: 'Professional Development',
                links: '/avenueDetail/professional-development'
            },
            {
                id: 5,
                sub: 'Sport',
                links: '/avenueDetail/sport'
            },
            {
                id: 6,
                sub: 'Public Relation',
                links: '/avenueDetail/public-relation'
            },
            {
                id: 7,
                sub: 'Digital Communication',
                links: '/avenueDetail/digital-communication'
            },
        ]
    },
    {
        id: 3,
        name: 'Avenues',
        links: '#',
        namesub: [
            {
                id: 2,
                sub: 'Sign up',
                links: '/signup'
            },
            {
                id: 3,
                sub: 'Faq v1',
                links: '/faq-v1'
            },
            {
                id: 4,
                sub: 'Faq v2',
                links: '/faq-v2'
            },
            {
                id: 5,
                sub: 'Our Team',
                links: '/our-team'
            },
            {
                id: 6,
                sub: 'Collection',
                links: '/collection'
            },
            {
                id: 7,
                sub: 'Testimonial',
                links: '/testimonial'
            },
            {
                id: 8,
                sub: 'Item Details',
                links: '/item-details'
            },
            {
                id: 9,
                sub: 'Comming Soon',
                links: '/comming-soon'
            },
            {
                id: 10,
                sub: 'Page 404',
                links: '/page-404'
            },
        ],
    },

    {
        id: 5,
        name: 'Contact Us',
        links: '/contact',
    },
    
]

export default menus;
