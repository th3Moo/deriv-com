import React from 'react'
import { OptionsFAQDataItem } from '../options-content/type'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import Accordion from 'features/components/atoms/accordion'

interface OptionsFaqProps {
    faqs: OptionsFAQDataItem[]
}

const OptionsFaq = ({ faqs }: OptionsFaqProps) => {
    return (
        <Flex.Box container="fluid" direction="col" justify="center" align="center" pb="40x">
            <Typography.Heading
                padding_block="20x"
                md={{
                    padding_block: '40x',
                }}
            >
                <Localize translate_text="_t_Browse our FAQ_t_" />
            </Typography.Heading>
            <Accordion.Root type="multiple">
                {faqs.map((faqItem) => (
                    <Accordion.ShadowItem
                        item_title={faqItem.question}
                        key={faqItem.id}
                        value={faqItem.question}
                        icon_type="plus"
                    >
                        <Flex.Box padding_block="8x" direction="col" gap="4x">
                            {faqItem.answers.map((answerItem) => (
                                <Flex.Box key={answerItem.id}>
                                    {answerItem.type === 'text' ? (
                                        <Typography.Paragraph>
                                            <Localize translate_text={answerItem.text} />
                                        </Typography.Paragraph>
                                    ) : (
                                        <ul>
                                            <Typography.Paragraph>
                                                <Localize translate_text={answerItem.list_title} />
                                            </Typography.Paragraph>
                                            {answerItem.list_items.map((answerListItem) => (
                                                <li key={answerListItem}>
                                                    <Typography.Paragraph>
                                                        <Localize translate_text={answerListItem} />
                                                    </Typography.Paragraph>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </Flex.Box>
                            ))}
                        </Flex.Box>
                    </Accordion.ShadowItem>
                ))}
            </Accordion.Root>
        </Flex.Box>
    )
}

export default OptionsFaq
