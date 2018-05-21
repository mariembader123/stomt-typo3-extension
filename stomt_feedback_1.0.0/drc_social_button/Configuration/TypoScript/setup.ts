
plugin.tx_stomtfeedback_stomtfeedback {
    view {
        templateRootPaths.0 = EXT:stomt_feedback/Resources/Private/Templates/
        templateRootPaths.1 = {$plugin.tx_stomtfeedback_stomtfeedback.view.templateRootPath}
        partialRootPaths.0 = EXT:stomt_feedback/Resources/Private/Partials/
        partialRootPaths.1 = {$plugin.tx_stomtfeedback_stomtfeedback.view.partialRootPath}
        layoutRootPaths.0 = EXT:stomt_feedback/Resources/Private/Layouts/
        layoutRootPaths.1 = {$plugin.tx_stomtfeedback_stomtfeedback.view.layoutRootPath}
    }
    persistence {
        storagePid = {$plugin.tx_stomtfeedback_stomtfeedback.persistence.storagePid}
        #recursive = 1
    }
    settings{
        jQuery{
            require = {$plugin.tx_stomtfeedback_stomtfeedback.settings.addJQuery}
            version = {$plugin.tx_stomtfeedback_stomtfeedback.settings.version}
        }
        addPlugin{
            allPages = {$plugin.tx_stomtfeedback_stomtfeedback.settings.allPages}
        }
        buttonPossition{
            possition = {$plugin.tx_stomtfeedback_stomtfeedback.settings.possition}
        }
        buttonEffect{
            effect = {$plugin.tx_stomtfeedback_stomtfeedback.settings.effect}
        }
        contactPUrl{
            url = {$plugin.tx_stomtfeedback_stomtfeedback.settings.url}
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
   custom = EXT:stomt_feedback/Resources/Public/js/custom.js
   easing = EXT:stomt_feedback/Resources/Public/js/easingEffect.js
}

# these classes are only used in auto-generated templates
plugin.tx_stomtfeedback._CSS_DEFAULT_STYLE (
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
