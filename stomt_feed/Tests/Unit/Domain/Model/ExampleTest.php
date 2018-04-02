<?php
namespace STOMT\StomtFeed\Tests\Unit\Domain\Model;

/**
 * Test case.
 *
 * @author Mariem Bader <bader.mariem1@gmail.com>
 */
class ExampleTest extends \TYPO3\CMS\Core\Tests\UnitTestCase
{
    /**
     * @var \STOMT\StomtFeed\Domain\Model\Example
     */
    protected $subject = null;

    protected function setUp()
    {
        parent::setUp();
        $this->subject = new \STOMT\StomtFeed\Domain\Model\Example();
    }

    protected function tearDown()
    {
        parent::tearDown();
    }

    /**
     * @test
     */
    public function dummyTestToNotLeaveThisFileEmpty()
    {
        self::markTestIncomplete();
    }
}
