<?php
defined('TYPO3_MODE') || die('Access denied.');

$LanguageFilePath = 'EXT:stomt_feedback/Resources/Private/Language/';

call_user_func(
    function () {

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerPlugin(
            'StomtFeedback.StomtFeedback',
            'StomtFeedback',
            'Social Button'
        );

        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
            'stomt_feedback',
            'Configuration/TypoScript',
            'Drc Social Media'
        );

        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addLLrefForTCAdescr(
            'tx_stomtfeedback_domain_model_socialbutton',
            $LanguageFilePath.'locallang_csh_tx_stomtfeedback_domain_model_socialbutton.xlf'
        );
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::allowTableOnStandardPages(
            'tx_stomtfeedback_domain_model_socialbutton'
        );
    }
);

//extenstion name
$extensionName = \TYPO3\CMS\Core\Utility\GeneralUtility::underscoredToUpperCamelCase($_EXTKEY);

//plugin integration
$frontendpluginName = 'StomtFeedback';
$pluginSignature = strtolower($extensionName) . '_'.strtolower(
    $frontendpluginName
);

$GLOBALS['TCA']['tt_content']['types']['list']['subtypes_addlist'][$pluginSignature] = 'pi_flexform';
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPiFlexFormValue(
    $pluginSignature,
    'FILE:EXT:' . $_EXTKEY . '/Configuration/FlexForms/configure_button.xml'
);
