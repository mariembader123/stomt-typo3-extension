<?php
defined('TYPO3_MODE') || die('Access denied.');

call_user_func(
    function () {

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
            'DeStomtFeedback.DeStomtFeedback',
            'DeStomtFeedback',
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
                        destomtfeedback {
                            icon = ' . \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extRelPath('de_stomt_feedback').'Resources/Public/Icons/plugin_wizard.gif
                            title = LLL:EXT:de_stomt_feedback/Resources/Private/Language/locallang_db.xlf:tx_destomtfeedback_domain_model_socialbutton
                            description = LLL:EXT:de_stomt_feedback/Resources/Private/Language/locallang_db.xlf:tx_destomtfeedback_domain_model_socialbutton.description
                            tt_content_defValues {
                                CType = list
                                list_type = destomtfeedback_destomtfeedback
                            }
                        }
                    }
                    show = *
                }
           }'
        );
    }
);
