
plugin.tx_destomtfeedback_destomtfeedback {
    view {
        templateRootPaths.0 = EXT:de_stomt_feedback/Resources/Private/Templates/
        templateRootPaths.1 = {$plugin.tx_destomtfeedback_destomtfeedback.view.templateRootPath}
        partialRootPaths.0 = EXT:de_stomt_feedback/Resources/Private/Partials/
        partialRootPaths.1 = {$plugin.tx_destomtfeedback_destomtfeedback.view.partialRootPath}
        layoutRootPaths.0 = EXT:de_stomt_feedback/Resources/Private/Layouts/
        layoutRootPaths.1 = {$plugin.tx_destomtfeedback_destomtfeedback.view.layoutRootPath}
    }
    persistence {
        storagePid = {$plugin.tx_destomtfeedback_destomtfeedback.persistence.storagePid}
        #recursive = 1
    }
    settings{
        jQuery{
            require = {$plugin.tx_destomtfeedback_destomtfeedback.settings.addJQuery}
            version = {$plugin.tx_destomtfeedback_destomtfeedback.settings.version}
        }
        addPlugin{
            allPages = {$plugin.tx_destomtfeedback_destomtfeedback.settings.allPages}
        }
        buttonPossition{
            possition = {$plugin.tx_destomtfeedback_destomtfeedback.settings.possition}
        }
        buttonEffect{
            effect = {$plugin.tx_destomtfeedback_destomtfeedback.settings.effect}
        }
        contactPUrl{
            url = {$plugin.tx_destomtfeedback_destomtfeedback.settings.url}
        }
    }
    features {
        #skipDefaultArguments = 1
        # if set to 1, the enable fields are ignored in BE context
        ignoreAllEnableFieldsInBe = 0
        # Should be on by default, but can be disabled if all action in the plugin are uncached
        requireCHashArgumentForActionArguments = 1
    }
    mvc {
        callDefaultActionIfActionCantBeResolved = 1
    }
}

lib.currentURL= TEXT
lib.currentURL.data = getIndpEnv:TYPO3_REQUEST_URL

page.includeJSFooter{
   custom = EXT:de_stomt_feedback/Resources/Public/js/custom.js
   easing = EXT:de_stomt_feedback/Resources/Public/js/easingEffect.js
}

# these classes are only used in auto-generated templates
plugin.tx_destomtfeedback._CSS_DEFAULT_STYLE (
    textarea.f3-form-error {
        background-color:#FF9F9F;
        border: 1px #FF0000 solid;
    }

    input.f3-form-error {
        background-color:#FF9F9F;
        border: 1px #FF0000 solid;
    }

    .tx-drc-social-button table {
        border-collapse:separate;
        border-spacing:10px;
    }

    .tx-drc-social-button table th {
        font-weight:bold;
    }

    .tx-drc-social-button table td {
        vertical-align:top;
    }

    .typo3-messages .message-error {
        color:red;
    }

    .typo3-messages .message-ok {
        color:green;
    }
)
