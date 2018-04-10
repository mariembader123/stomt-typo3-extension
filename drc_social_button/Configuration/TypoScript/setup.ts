
plugin.tx_drcsocialbutton_drcsocialbutton {
    view {
        templateRootPaths.0 = EXT:drc_social_button/Resources/Private/Templates/
        templateRootPaths.1 = {$plugin.tx_drcsocialbutton_drcsocialbutton.view.templateRootPath}
        partialRootPaths.0 = EXT:drc_social_button/Resources/Private/Partials/
        partialRootPaths.1 = {$plugin.tx_drcsocialbutton_drcsocialbutton.view.partialRootPath}
        layoutRootPaths.0 = EXT:drc_social_button/Resources/Private/Layouts/
        layoutRootPaths.1 = {$plugin.tx_drcsocialbutton_drcsocialbutton.view.layoutRootPath}
    }
    persistence {
        storagePid = {$plugin.tx_drcsocialbutton_drcsocialbutton.persistence.storagePid}
        #recursive = 1
    }
    settings{
        jQuery{
            require = {$plugin.tx_drcsocialbutton_drcsocialbutton.settings.addJQuery}
            version = {$plugin.tx_drcsocialbutton_drcsocialbutton.settings.version}
        }
        addPlugin{
            allPages = {$plugin.tx_drcsocialbutton_drcsocialbutton.settings.allPages}
        }
        buttonPossition{
            possition = {$plugin.tx_drcsocialbutton_drcsocialbutton.settings.possition}
        }
        buttonEffect{
            effect = {$plugin.tx_drcsocialbutton_drcsocialbutton.settings.effect}
        }
        contactPUrl{
            url = {$plugin.tx_drcsocialbutton_drcsocialbutton.settings.url}
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
   custom = EXT:drc_social_button/Resources/Public/js/custom.js
   easing = EXT:drc_social_button/Resources/Public/js/easingEffect.js
}

# these classes are only used in auto-generated templates
plugin.tx_drcsocialbutton._CSS_DEFAULT_STYLE (
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
