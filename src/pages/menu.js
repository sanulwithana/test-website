const menus = [
    {
        id: 1,
        name: 'Home',
        links: '/',
    },
    {
        id: 2,
        name: 'About Us',
        links: '#',
        namesub: [
            {
                id: 1,
                sub: 'Annual Report',
                links: '/annualreport'
            },
            {
                id: 2,
                sub: 'Awards',
                links: '/awards'
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
        id: 5,
        name: 'Contact Us',
        links: '/contact',
    },
    
]

export default menus;
