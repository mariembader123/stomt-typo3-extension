<?php
namespace DrcSocialButton\DrcSocialButton\Controller;

/***
 *
 * This file is part of the "StomtFeedback" Extension for TYPO3 CMS.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 *  (c) 2018
 *
 ***/

/**
 * SocialButtonController
 */
class SocialButtonController extends \TYPO3\CMS\Extbase\Mvc\Controller\ActionController
{
    /**
     * action socialButton
     *
     * @return void
     */
    public function socialButtonAction()
    {
        $pageTitle = $GLOBALS['TSFE']->page['title'];
        $pageDescription = $GLOBALS['TSFE']->page['description'];

        // Add Meta tag Title
       

        $button_position = $this->settings['button_position'];
        $titl = $this->settings['titl'];
        $appid = $this->settings['appid'];
        $colorText = $this->settings['colorText'];
        $colorBackground = $this->settings['colorBackground'];
        $colorHover = $this->settings['colorHover'];


        
        $this->view->assign('titl', $titl);
        $this->view->assign('appid', $appid);
        $this->view->assign('colorText', $colorText);
        $this->view->assign('colorBackground', $colorBackground);
        $this->view->assign('colorHover', $colorHover);
        $this->view->assign('button_position', $button_position);



    }
}
