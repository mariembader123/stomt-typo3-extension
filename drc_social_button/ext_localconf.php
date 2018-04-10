<?php
defined('TYPO3_MODE') || die('Access denied.');

call_user_func(
    function () {

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
            'DrcSocialButton.DrcSocialButton',
            'Drcsocialbutton',
            [
                'SocialButton' => 'socialButton'
            ],
            // non-cacheable actions
            [
                'SocialButton' => ''
            ]
        );

        // wizards
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
            'mod {
                wizards.newContentElement.wizardItems.plugins {
                    elements {
                        drcsocialbutton {
                            icon = ' . \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extRelPath('drc_social_button').'Resources/Public/Icons/plugin_wizard.gif
                            title = LLL:EXT:drc_social_button/Resources/Private/Language/locallang_db.xlf:tx_drcsocialbutton_domain_model_socialbutton
                            description = LLL:EXT:drc_social_button/Resources/Private/Language/locallang_db.xlf:tx_drcsocialbutton_domain_model_socialbutton.description
                            tt_content_defValues {
                                CType = list
                                list_type = drcsocialbutton_drcsocialbutton
                            }
                        }
                    }
                    show = *
                }
           }'
        );
    }
);
