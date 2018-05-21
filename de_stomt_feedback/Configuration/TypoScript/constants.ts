plugin.tx_destomtfeedback_destomtfeedback {
    view {
        # cat=plugin.tx_destomtfeedback_destomtfeedback/file; type=string; label=Path to template root (FE)
        templateRootPath = EXT:de_stomt_feedback/Resources/Private/Templates/
        # cat=plugin.tx_destomtfeedback_destomtfeedback/file; type=string; label=Path to template partials (FE)
        partialRootPath = EXT:de_stomt_feedback/Resources/Private/Partials/
        # cat=plugin.tx_destomtfeedback_destomtfeedback/file; type=string; label=Path to template layouts (FE)
        layoutRootPath = EXT:de_stomt_feedback/Resources/Private/Layouts/
    }
    persistence {
        # cat=plugin.tx_destomtfeedback_destomtfeedback//a; type=string; label=Default storage PID
        storagePid =
    }
    settings{
        # cat=plugin.tx_destomtfeedback_destomtfeedback//a; type=boolean; label=Add JQuery Library
        addJQuery = 1
        # cat=plugin.tx_destomtfeedback_destomtfeedback/text; type=string; label=JQuery Library Version
        version = jquery-1.11.3.min.js
        # cat=plugin.tx_destomtfeedback_destomtfeedback//a; type=boolean; label=Add Plugin In All Pages
        allPages = 0
        # cat=plugin.tx_destomtfeedback_destomtfeedback/text; type=string; label=Button Postion(Left And Right)
        possition = left
        # cat=plugin.tx_destomtfeedback_destomtfeedback/text; type=options[LLL:EXT:de_stomt_feedback/Resources/Private/Language/locallang_db.xlf:tx_destomtfeedback_domain_model_socialbutton.easeOutQuad=easeOutQuad,LLL:EXT:de_stomt_feedback/Resources/Private/Language/locallang_db.xlf:tx_destomtfeedback_domain_model_socialbutton.easeOutElastic=easeOutElastic,LLL:EXT:de_stomt_feedback/Resources/Private/Language/locallang_db.xlf:tx_destomtfeedback_domain_model_socialbutton.easeOutCirc=easeOutCirc,LLL:EXT:de_stomt_feedback/Resources/Private/Language/locallang_db.xlf:tx_destomtfeedback_domain_model_socialbutton.easeOutExpo=easeOutExpo,LLL:EXT:de_stomt_feedback/Resources/Private/Language/locallang_db.xlf:tx_destomtfeedback_domain_model_socialbutton.easeInQuad=easeInQuad,LLL:EXT:de_stomt_feedback/Resources/Private/Language/locallang_db.xlf:tx_destomtfeedback_domain_model_socialbutton.easeInElastic=easeInElastic,LLL:EXT:de_stomt_feedback/Resources/Private/Language/locallang_db.xlf:tx_destomtfeedback_domain_model_socialbutton.easeInCirc=easeInCirc,LLL:EXT:de_stomt_feedback/Resources/Private/Language/locallang_db.xlf:tx_destomtfeedback_domain_model_socialbutton.easeInExpo=easeInExpo]; label=Button Effect
        effect = easeOutQuad
        # cat=plugin.tx_destomtfeedback_destomtfeedback/text; type=string; label=Contact Page Url
        url = 
    }
}
