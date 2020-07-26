// import { LOCALES } from '../locales'

// export default {
//     [LOCALES.ARABIC]: {
//         'mahaalk': 'Mahaalk',
//         'success': 'نجاح',
//         'and': '  أو  ',
//         'login': 'تسجيل الدخول',
//         'signup': ' سجل ',
//         'logging': 'تسجيل الدخول',
//         'delete': 'Delete',
//         'rs': 'Rs',
//         'related_categories': 'Related Categories',

//         // Toolbar
//         'go_to_dashbord': 'الذهاب إلى لوحة القيادة',
//         'sell_on_mahaalk': 'بيع على ماهالك',
//         'get_app': 'احصل على التطبيق',
//         'services': 'خدمات',
//         'help': 'مساعدة',
//         'profile': 'الملف الشخصي',
//         'my_orders': 'طلباتي',
//         'logout': 'تسجيل خروج',
//         'search': 'بحث',
//         'cart': 'عربة التسوق',
//         'categories': 'التصنيفات',

//         // Login, Signup,  Vendor Signup
//         'login_to_mahaalk': 'محالك مع تسجيل الدخول',
//         'mobile_number': 'رقم الهاتف المحمول',
//         'enter_mobile_nmbr': 'أدخل رقم الهاتف المحمول',

//         'full_name': 'الاسم الكامل',
//         'enter_full_name': 'أدخل الاسم الكامل',
//         'min_full_name': 'يجب أن يحتوي على 5 أحرف على الأقل',
//         'max_full_name': 'لا يمكن أن يزيد عن 25 حرفًا',

//         'email': 'عنوان البريد الالكترونى',
//         'enter_valid_email': 'يجب أن يكون عنوان بريد إلكتروني صالح',
//         'email_max': 'لا يمكن أن يزيد عن 100 حرف',

//         'password': 'كلمه السر',
//         'enter_password': 'أدخل كلمة المرور',
//         'password_min': 'يجب أن يحتوي عل8 أحرف على الأقل',
//         'password_max': 'لا يمكن أن يزيد عن 20 حرف',
//         'confirm_password': 'تأكيد كلمة المرور',
//         'reenter_password': 'اعادة ادخال كلمة السر',
//         'enter_confirm_password': 'أدخل تأكيد كلمة المرور',
//         'password_match': 'يجب ان تتطابق كلمات المرور',

//         'select_country': 'حدد الدولة',
//         'city': 'City',
//         'enter_city': 'أدخل اسم المدينة',
//         'city_min': 'يجب أن يحتوي على 3 أحرف على الأقل',
//         'city_max': 'لا يمكن أن يزيد عن 30 حرف',

//         'address': 'عنوان',
//         'enter_address': 'أدخل العنوان',
//         'address_min': 'يجب أن يحتوي على 3 أحرف على الأقل',
//         'address_max': 'لا يمكن أن يزيد عن 100 حرف',

//         'shop_name': 'اسم المحل',
//         'enter_shop_name': 'أدخل اسم المتجر',
//         'shop_name_min': 'يجب أن يحتوي على 3 أحرف على الأقل',
//         'shop_name_max': 'لا يمكن أن يزيد عن 50 حرف',

//         'shop_category': 'فئة المتجر',
//         'enter_category': 'أدخل فئة',

//         'shop_address': 'عنوان المحل',
//         'enter_shop_address': 'أدخل عنوان المحل',
//         'min_shop_address': 'يجب أن يحتوي على 5 أحرف على الأقل',
//         'max_shop_address': 'لا يمكن أن يزيد عن 200 حرف',

//         'number_already_exists': 'هذا الرقم موجود بالفعل',
//         'code_sended': 'تم إرسال الرمز ، تحقق من رقمك',
//         'code_not_sended': 'خطأ: لم يتم إرسال الرمز',
//         'enter_valid_number': 'أدخل رقمًا صالحًا برمز البلد',
//         'nmbr_verified': 'تم التحقق من الرقم',
//         'invalid_code': 'رمز غير صالح: حاول مرة أخرى',
//         'verify_your_nmbr': 'يرجى التحقق أولا من رقم هاتفك المحمول!',
//         'signup_failed': 'فشل تسجيل المستخدم ، حاول مرة أخرى لاحقًا',

//         'resend': 'إعادة إرسال',
//         'send_code': 'أرسل الرمز',
//         'change_nmbr': 'تغيير رقم',
//         'verification_code': 'شيفرة التأكيد',
//         'number_verified': 'تم التحقق من الرقم',
//         'verified': 'تم التحقق',
//         'verify': 'تحقق',
//         'gender': 'جنس',
//         'select': 'تحديد',
//         'male': 'الذكر',
//         'female': 'أنثى',
//         'other': 'آخر',
//         'country': 'بلد',
//         'ksa': 'السعودية',

//         'welcome_to_mahaalk': 'أهلا وسهلا بك إلى ماهالك',
//         'creat_account': 'أنشئ حسابك',


//         'forgot_password': 'هل نسيت كلمة المرور؟',
//         'dont_have_account': ' لا تملك حساب؟  ',
//         'terms_conditions': 'البنود و الظروف',
//         'by_logging_in': '  بتسجيل الدخول ، أنت توافق على ماهالك',
//         'by_creating_account': '  من خلال إنشاء حساب ، فإنك توافق على ماهالك',
//         'already_have_account': ' هل لديك حساب...',
//         'privacy_statement': 'بيان الخصوصية',

//         'account_created': 'الحساب اقيم بنجاح',
//         'signing': 'توقيع',


//         'description': 'Fuck off'


//     }
// }


import { LOCALES } from '../locales'

export default {
    [LOCALES.ARABIC]: {
        'mahaalk': 'Mahaalk',
        'success': 'Success',
        'and': 'and',
        'login': 'Login',
        'logging': 'Logging',
        'signup': 'Signup',
        'logout': 'Logout',
        'delete': 'Delete',
        'rs': 'Rs',
        'related_categories': 'Related Categories',

        // Toolbar
        'go_to_dashbord': 'Go To Dashboard',
        'sell_on_mahaalk': 'Sell on Mahaalk',
        'get_app': 'Get the App',
        'services': 'Services',
        'help': 'Help',
        'profile': 'Profile',
        'my_orders': 'My Orders',
        'search': 'Search',
        'cart': 'Cart',
        'categories': 'Categories',

        // Footer
        'copyright': 'Copyright@ 2020',
        'online_shopping_site': 'Online Shopping Website',
        'follow_us': 'Follow Us',
        'payment_methods': 'Payment Method:',
        'need_help': 'Need Help?',
        'contact_us': 'Contact Us',
        'submit_issue': 'Submit Issue',
        'about_us': 'About Us',
        'know_about_us': 'Know More About Us',
        'mahaalk_team': 'Mahaalk\'s Team',
        'be_part_mahaalk': 'Be Mahaalk\'s Part',
        'learn_more': 'Learn More',


        // Login, Signup,  Vendor Signup
        'login_to_mahaalk': 'Login To Mahaalk',
        'mobile_number': 'Mobile Number',
        'enter_mobile_nmbr': 'Enter Mobile Number',

        'full_name': 'Full Name',
        'enter_full_name': 'Enter Full Name',
        'min_full_name': 'Must have at least 5 characters',
        'max_full_name': 'Can\'t be longer than 25 characters',

        'email': 'Email Address',
        'enter_valid_email': 'Must be a valid email address',
        'email_max': 'Can\'t be longer than 100 characters',

        'password': 'Password',
        'enter_password': 'Enter Password',
        'password_min': 'Password must have at least 8 characters',
        'password_max': 'Can\'t be longer than 20 characters',
        'confirm_password': 'Confirm Password',
        'reenter_password': 'Re-enter Password',
        'enter_confirm_password': 'Enter Confirm Password',
        'password_match': 'Passwords must match',

        'select_country': 'Select Country',
        'city': 'City',
        'enter_city': 'Enter City Name',
        'city_min': 'Must have at least 3 characters',
        'city_max': 'Can\'t be longer than 30 characters',

        'address': 'Address',
        'enter_address': 'Enter Address',
        'address_min': 'Must have at least 3 characters',
        'address_max': 'Can\'t be longer than 100 characters',

        'shop_name': 'Shop Name',
        'enter_shop_name': 'Enter Shop Name',
        'shop_name_min': 'Must have at least 3 characters',
        'shop_name_max': 'Can\'t be longer than 50 characters',

        'shop_category': 'Shop Category',
        'enter_category': 'Enter category',

        'shop_address': 'Shop Address',
        'enter_shop_address': 'Enter Shop Address',
        'min_shop_address': 'Must have at least 5 characters',
        'max_shop_address': 'Can\'t be longer than 200 characters',

        'number_already_exists': 'This number already exists',
        'code_sended': 'Code Sended, Check your number',
        'code_not_sended': 'Error: Code not sended',
        'enter_valid_number': 'Enter valid number with country code',
        'nmbr_verified': 'Number Verified',
        'invalid_code': 'Invalid Code, Try again',
        'verify_your_nmbr': 'Please first verify your mobile number!',
        'signup_failed': 'User Signup Failed, Try again later',

        'resend': 'Resend',
        'send_code': 'Send Code',
        'change_nmbr': 'Change Number',
        'verification_code': 'Verification Code',
        'number_verified': 'Number Verified',
        'verified': 'Verified',
        'verify': 'Verify',
        'gender': 'Gender',
        'select': 'Select',
        'male': 'Male',
        'female': 'Female',
        'other': 'Other',
        'country': 'Country',
        'ksa': 'KSA',

        'welcome_to_mahaalk': 'Welcome To Mahaalk',
        'creat_account': 'Create Your Account',


        'forgot_password': 'Forgot Password?',
        'dont_have_account': 'Don\'t have an account? ',
        'terms_conditions': 'Terms & Conditions',
        'by_logging_in': 'By logging in, you agree to Mahaalk\'s',
        'by_creating_account': 'By creating account, you agree to Mahaalk\'s',
        'already_have_account': 'Already have an account...',
        'privacy_statement': 'Privacy Statement',

        'account_created': 'Account Created Successfully',
        'signing': 'Signing up',

        // Account, Profile
        'view': 'View',
        'change_picture': 'Change Picture',
        'change_password': 'Change Password',
        'pending': 'Pending',
        'delivered': 'Delivered',
        'cancelled': 'Cancelled',
        'language_currency': 'Language & Currency',
        'my_profile': 'My Profile',

        // Cart
        'continue_shopping': 'Continue Shopping ',
        'select_all': 'Select All',
        'sub_total': 'Sub Total',
        'shipping_charges': 'Shipping Charges',
        'total': 'Total',
        'procede_order': ' Procede to Order',

        // Product
        'description': 'Description',
        'no_description': 'No Description',
        'specifications': 'Specifications',
        'no_specifications': 'No Specifications',
        'overall_rating': 'Overall Rating',
        'rating_reviews': 'Rating & Reviews',
        'rating': 'Rating',
        'reviews': 'Reviews',
        'no_reviews': 'No Reviews',
        'give_review': 'Give Review',
        'rate_product': 'Rate Product',
        'enter_review': 'Type your review here',
        'rate': 'Rate',


        // Home
        'new': 'NEW',
        'show_more': 'Show More',
        'top_ranking': 'Top Ranking',
        'new_arrivals': 'New Arrivals',
        'top': 'TOP',
        'you_may_like': 'You May Like',

        //  Sticky Bottom Navbar
        'home': 'Home',


        // Slider Carosuel
        'all_categories': 'All categories',



        'available_in_stock': 'Available in Stock',
        'stock': 'Stock',
        'quantity': 'Quantity',


    }
}