plugin.tx_drcsocialbutton_drcsocialbutton {
    view {
        # cat=plugin.tx_drcsocialbutton_drcsocialbutton/file; type=string; label=Path to template root (FE)
        templateRootPath = EXT:drc_social_button/Resources/Private/Templates/
        # cat=plugin.tx_drcsocialbutton_drcsocialbutton/file; type=string; label=Path to template partials (FE)
        partialRootPath = EXT:drc_social_button/Resources/Private/Partials/
        # cat=plugin.tx_drcsocialbutton_drcsocialbutton/file; type=string; label=Path to template layouts (FE)
        layoutRootPath = EXT:drc_social_button/Resources/Private/Layouts/
    }
    persistence {
        # cat=plugin.tx_drcsocialbutton_drcsocialbutton//a; type=string; label=Default storage PID
        storagePid =
    }
    settings{
        # cat=plugin.tx_drcsocialbutton_drcsocialbutton//a; type=boolean; label=Add JQuery Library
        addJQuery = 1
        # cat=plugin.tx_drcsocialbutton_drcsocialbutton/text; type=string; label=JQuery Library Version
        version = jquery-1.11.3.min.js
        # cat=plugin.tx_drcsocialbutton_drcsocialbutton//a; type=boolean; label=Add Plugin In All Pages
        allPages = 0
        # cat=plugin.tx_drcsocialbutton_drcsocialbutton/text; type=string; label=Button Postion(Left And Right)
        possition = left
        # cat=plugin.tx_drcsocialbutton_drcsocialbutton/text; type=options[LLL:EXT:drc_social_button/Resources/Private/Language/locallang_db.xlf:tx_drcsocialbutton_domain_model_socialbutton.easeOutQuad=easeOutQuad,LLL:EXT:drc_social_button/Resources/Private/Language/locallang_db.xlf:tx_drcsocialbutton_domain_model_socialbutton.easeOutElastic=easeOutElastic,LLL:EXT:drc_social_button/Resources/Private/Language/locallang_db.xlf:tx_drcsocialbutton_domain_model_socialbutton.easeOutCirc=easeOutCirc,LLL:EXT:drc_social_button/Resources/Private/Language/locallang_db.xlf:tx_drcsocialbutton_domain_model_socialbutton.easeOutExpo=easeOutExpo,LLL:EXT:drc_social_button/Resources/Private/Language/locallang_db.xlf:tx_drcsocialbutton_domain_model_socialbutton.easeInQuad=easeInQuad,LLL:EXT:drc_social_button/Resources/Private/Language/locallang_db.xlf:tx_drcsocialbutton_domain_model_socialbutton.easeInElastic=easeInElastic,LLL:EXT:drc_social_button/Resources/Private/Language/locallang_db.xlf:tx_drcsocialbutton_domain_model_socialbutton.easeInCirc=easeInCirc,LLL:EXT:drc_social_button/Resources/Private/Language/locallang_db.xlf:tx_drcsocialbutton_domain_model_socialbutton.easeInExpo=easeInExpo]; label=Button Effect
        effect = easeOutQuad
        # cat=plugin.tx_drcsocialbutton_drcsocialbutton/text; type=string; label=Contact Page Url
        url = 
    }
}
