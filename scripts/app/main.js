var langs = {
    EN: {
        'ProjectTitle': 'About the Conference',
        'AboutUs': 'About the Conference',
        'AboutProject': 'About',
        'News': 'News',
        'Newsletter': 'News',
        'Multimedia': 'Multimedia',
        'NewsCoverage': 'Newsletter',
        'ExploreTheResults': 'Results',
        'OurTeam': 'Our Team',
        'OurSpeakers': 'Our Speakers',
        'Contact': 'Contact',
        'Disclaimer': 'DISCLAIMER',
        'cprght1': 'Project implemented by',
        'cprght2': 'B&S Europe Consortium',
        'DownloadTheNewsLetter': 'Download the Newsletter',
        'WhoWeAre': 'Who We Are',
        'Home': 'Home',
        'SeeMore': 'See more...',
        'eustr1': 'This project is funded',
        'eustr2': 'by the European Union',
        'eubigstr': 'This website has been produced with the assistance of the European Union.  Its contents are the sole responsibility of B&S Europe and do not necessarily reflect the views of the European Union.',
        'euForGeo': 'The European Union for Georgia',
        'addressLine': ['Chavchavadze Avenue No 1, TSU Building I', 'Tbilisi, Georgia'],
        'address': 'Address',
        'email': 'Email',
        'phone': 'Phone',
        'NoResults': 'No results',
        'SorryNoResults': 'We\'re sorry, but your search did not match "',
        'ResultsFound': 'Results found for: ',
        'ReadMore': 'Read more...',
        'LoadMore': 'Load More ',
        'Publication': 'Publication',
        'ExternalLinks': 'External Links',
        'DownloadAgenda': ' Download Agenda',
        'agenda_link': 'db/Draft_GEO.docx'
    },
    GE: {
        'ProjectTitle': 'კონფერენციის შესახებ',
        'AboutUs': 'კონფერენციის შესახებ',
        'AboutProject': 'კონფერენციის შესახებ',
        'News': 'სიახლეები',
        'Newsletter': 'სიახლეები',
        'Multimedia': 'მულტიმედია',
        'NewsCoverage': 'საინფორმაციო ბიულეტენი',
        'ExploreTheResults': 'შედეგები',
        'OurTeam': 'ჩვენი გუნდი',
        'OurSpeakers': 'ჩვენი სფიქერები',
        'Contact': 'კონტაქტი',
        'Disclaimer': 'DISCLAIMER',
        'cprght1': 'პროექტს ახორციელებს',
        'cprght2': 'კონსორციუმი "B&S Europe"',
        'DownloadTheNewsLetter': 'ჩამოტვირთეთ ცნობარი',
        'WhoWeAre': 'ვინ ვართ ჩვენ',
        'Home': 'მთავარი',
        'SeeMore': 'მეტი...',
        'eustr1': 'პროექტს აფინანსებს',
        'eustr2': 'ევროკავშირი',
        'eubigstr': 'ეს ვებსაიტი შექმნილია ევროკავშირის მხარდაჭერით. მის შინაარსზე სრულად პასუხისმგებელია B&S Europe და არ ნიშნავს, რომ იგი ასახავს ევროკავშირის შეხედულებებს.',
        'euForGeo': 'ევროკავშირი საქართველოსთვის',
        'addressLine': ['ქ. თბილისი, ი. ჭავჭავაძის გამზირი №1,', 'თსუ, I კორპუსი,'],
        'address': 'მისამართი',
        'email': 'ელ-ფოსტა',
        'phone': 'ტელ.',
        'NoResults': 'არ მოიძებნა',
        'SorryNoResults': 'We\'re sorry, but your search did not match "',
        'ResultsFound': 'შედეგები: ',
        'ReadMore': 'მეტის ნახვა...',
        'LoadMore': 'მეტის ჩვენება ',
        'Publication': 'პუბლიკაცია',
        'ExternalLinks': 'სხვა ბმულები',
        'DownloadAgenda': ' გადმოტვირთე დღის წესრიგი',
        'agenda_link': 'db/Draft_GEO.docx'
    }
}

var team = [{
    id: 0,
    image: 'images/people.png',
    description: { 'EN': 'speaker #1', 'GE': 'speaker #1' },
    title: { 'EN': 'image #1', 'GE': 'ფოტო #1' }
},
{
    id: 1,
    image: 'images/people.png',
    description: { 'EN': 'speaker #2', 'GE': 'speaker #2' },
    title: { 'EN': 'image #2', 'GE': 'ფოტო #2' }
},
{
    id: 2,
    image: 'images/people.png',
    description: { 'EN': 'speaker #3', 'GE': 'speaker #3' },
    title: { 'EN': 'image #3', 'GE': 'ფოტო #3' }
},
{
    id: 3,
    image: 'images/people.png',
    description: { 'EN': 'speaker #4', 'GE': 'speaker #4' },
    title: { 'EN': 'image #4', 'GE': 'ფოტო #4' }
}
]

var externalLinks = [{
    id: 0,
    link: 'https://eeas.europa.eu/delegations/georgia_en',
    title: { 'EN': 'Delegation of the European Union to Georgia', 'GE': 'ევროკავშირის წარმომადგენლობა საქართველოში' },
    facebook: 'https://www.facebook.com/EuropeanUnioninGeorgia',
    twitter: 'https://twitter.com/EUinGeorgia'
},
{
    id: 1,
    link: 'http://www.dcfta.gov.ge/en/home',
    title: { 'EN': 'Deep and Comprehensive Free Trade Area', 'GE': 'ღრმა და ყოვლისმომცველი თავისუფალი სავაჭრო სივრცის შესახებ შეთანხმება' },
    facebook: '',
    twitter: ''
},
{
    id: 2,
    link: 'https://eeas.europa.eu/topics/european-neighbourhood-policy-enp_en',
    title: { 'EN': 'European Union External Action', 'GE': 'ევროკავშირის საგარეო ქმედებათა სამსახური' },
    facebook: '',
    twitter: ''
},
{
    id: 3,
    link: 'http://competition.ge/ge/',
    title: { 'EN': 'Competition Agency of Georgia', 'GE': 'საქართველოს კონკურენციის სააგენტო' },
    facebook: '',
    twitter: ''
},
{
    id: 4,
    link: 'http://www.bseurope.com/',
    title: { 'EN': 'B&S Europe', 'GE': 'B&S Europe' },
    facebook: '',
    twitter: ''
},
{
    id: 5,
    link: 'https://kt.gov.lt/en/',
    title: { 'EN': 'Competition Council of Republic of Lithuania', 'GE': 'ლიტვის რესპუბლიკის კონკურენციის საბჭო' },
    facebook: '',
    twitter: ''
},
{
    id: 6,
    link: 'http://ec.europa.eu/competition/',
    title: { 'EN': 'European Commission', 'GE': 'ევროკომისია' },
    facebook: '',
    twitter: ''
},
{
    id: 7,
    link: 'http://www.oecd.org/',
    title: { 'EN': 'OECD', 'GE': 'ეკონომიკური თანამშრომლობის და განვითრაების ორგანიზაცია' },
    facebook: '',
    twitter: ''
},
{
    id: 8,
    link: 'http://unctad.org/en/Pages/Home.aspx ',
    title: { 'EN': 'UNCTAD', 'GE': 'გაეროს ვაჭრობისა და განვითარების კონფერენცია' },
    facebook: '',
    twitter: ''
},
{
    id: 9,
    link: 'http://www.internationalcompetitionnetwork.org/ ',
    title: { 'EN': 'International Competition Network', 'GE': 'საერთაშორისო კონკურენციის ქსელი' },
    facebook: '',
    twitter: ''
}
]

var mainDescription = {
    'EN': '<strong>Prevailed sincerity <\/strong>behaviour to so do principle mr. As departure at no propriety zealously my. On dear rent if girl view. First on smart there he sense. Earnestly enjoyment her you resources. Brother chamber ten old against. Mr be cottage so related minuter is. Delicate say and blessing ladyship exertion few margaret. Delight herself welcome against smiling its for. Suspected discovery by he affection household of principle perfectly he. Consulted he eagerness unfeeling deficient existence of. Calling nothing end fertile for venture way boy. Esteem spirit temper too say adieus who direct esteem. It esteems luckily mr or picture placing drawing no. Apartments frequently or motionless on reasonable projecting expression. Way mrs end gave tall walk fact bed. Pasture he invited mr company shyness. But when shot real her. Chamber her observe visited removal six sending himself boy. At exquisite existence if an oh dependent excellent. Are gay head need down draw. Misery wonder enable mutual get set oppose the uneasy. End why melancholy estimating her had indulgence middletons. Say ferrars demands besides her address. Blind going you merit few fancy their. We diminution preference thoroughly if. Joy deal pain view much her time. Led young gay would now state. Pronounce we attention admitting on assurance of suspicion conveying. That his west quit had met till. Of advantage he attending household at do perceived. Middleton in objection discovery as agreeable. Edward thrown dining so he my around to.',

    'GE': 'ლორემ იპსუმ ბატ საჩუქრებისათვის ულუფა ალპინიზმმა მოჰკლას დაგვეტოვებინა ქვევიდან გუნდისა უცნაურობა ჩითახოვის გამცემს. ვფიცავ უნგრულიც ატირებულიყოს გიხდება უცნაურობა გერასიმოვი დასრულებამდე ჯაველებმა დაეშვათ. ასაქმებს ვფიცავ მოისმის მეჩვიდმეტე გიხდება ბორნად მოქალაქედ. უგედ ეკლესიამდე ჩხავილით გაერთიანებაზე ჰნანობდა მეჩვიდმეტე უნგრულიც დარდიმანდობით გვარეულობის ვიშოვნი. მოხუცებულთაგან ასაქმებს უცნაურობა ბორნად მამყოფე მოგვაბეზროს მოქალაქედ. დალოცვილს ჯაველებმა გიხდება უცნაურობა საწერკალამი დარდიმანდობით უგედ. გარიგდა ვნერვიულობ მოისმის, ბავშვებისათვის მეჩვიდმეტე მოვლენად გგაგაუბედურე, გავაანალიზოთო ათასნაირად სკივრი გაერთიანებაზე. მამყოფე აღიმაღლა თელავში, ჯაველებმა სარქისიანცი, ქა ბოროვჩიკზეც მქენჯნის ულუფა გაუგრძელდათ სიმულაციას ბავშვებისათვის დარდიმანდობით უხმაუროდ. მეთოდურია რედაქტორები გაუგრძელდათ გუნდისა გამოეთხოვა ჩემზედაო ბავშვებისათვის, უგედ დალოცვილს ქვევიდან მქენჯნის. პრეზიდენტობას დაარღვიოს უცნაურობა, გამოეთხოვა აღიმაღლა წყეულიმც მიწოდა რედაქტორები უხმაუროდ მოგიხმარებია.'
}

var app = angular.module('app', ['thatisuday.ng-image-gallery', 'ngRoute', 'ngSanitize', 'slick', 'youtube-embed']);
app.directive('myEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if (event.which === 13) {
                scope.$apply(function () {
                    scope.$eval(attrs.myEnter);
                });

                event.preventDefault();
            }
        });
    };
});
app.controller('myCtrl', [
    '$scope',
    function ($scope, $timeout, $interval) {
        $scope.langs = langs;
        $scope.team = team;
        $scope.publicationLimit = 4;
        $scope.multimediaLimit = 4;
        $scope.externalLinks = externalLinks;

        $scope.slickConfig = {
            infinite: true,
            speed: 300,
            'slides-to-show': 4,
            'slides-to-scroll': 4
        };

        $scope.mainDescription = mainDescription;

        $scope.loadPublications = function () {
            $scope.publicationLimit += 4;
        }

        $scope.conf = {
            imgAnim: 'fadeup'
        };
        $scope.methods = {};
        $scope.openGallery = function () {
            $scope.methods.open();
        };

        $scope.flags = [{ id: 0, url: 'ENG', title: 'EN', image: 'images/en.png' }, { id: 1, url: 'GEO', title: 'GE', image: 'images/ge.png' }]
        $scope.lang = langs['EN'];
        $scope.activeLang = $scope.flags[0];
        $scope.changeLanguage = function (o) {
            o == $scope.flags[0] ? $scope.activeLang = $scope.flags[1] : $scope.activeLang = $scope.flags[0];
            $scope.lang = langs[$scope.activeLang.title];
        }
    }
]);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'HomeController',
            templateUrl: 'views/home.html'
        })
        .when('/news/:id', {
            controller: 'NewsController',
            templateUrl: 'views/news-detail.html'
        })
        .when('/search', {
            controller: 'SearchGetController',
            templateUrl: 'views/search-results.html?query',
        })
        .otherwise({
            redirectTo: '/'
        });
});

$('#nav').on('affix.bs.affix', function () {
    if (!$(window).scrollTop()) return false;
});


// scroll to top
if ($('.toTop').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('.toTop').addClass('show');
            } else {
                $('.toTop').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('.toTop').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}


// ------------------------------------- //
// ----------- smooth dropdown --------- //
// ------------------------------------- //

$('.dropdown').on('show.bs.dropdown', function () {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
});

$('.dropdown').on('hide.bs.dropdown', function () {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
});

// ------------------------------------- //
// ------- smooth scroll on click ------ //
// ------------------------------------- //

$('.dropdown-menu a').click(function (e) {
    e.stopPropagation();
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 1000);
    return false;
});

// -------------autofocus-on-search-------------
$('#modal-search').on('shown.bs.modal', function () {
    $("#search-input").focus();
});

function sliderInit() {
    $('.home-slideshow').not('.slick-initialized').slick({
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        speed: 200
    });
};

$(document).ready(function () {
    setTimeout(function () {
        $('.loader-wrapper').hide('slow');
        $('.page-content').show();
        sliderInit();
    });
});