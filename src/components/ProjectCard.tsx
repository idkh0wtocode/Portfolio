"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  Line,
  Media,
  SmartLink,
  Text,
} from "@once-ui-system/core";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
}) => {
  return (
    <Flex
      fillWidth
      gap="m"
      direction="row"
      paddingY="m"
    >
      {images.length > 0 && (
        <SmartLink href={href} style={{ flex: "0 0 200px" }}>
           <Media
            priority
            radius="m"
            src={images[0]}
            alt={title}
            aspectRatio="16 / 9"
            objectFit="cover"
          />
        </SmartLink>
      )}
      
      <Line vert background="neutral-alpha-medium" />

      <Column fillWidth gap="8">
        <Heading as="h2" variant="heading-strong-l" wrap="balance">
          {title}
        </Heading>
        {description?.trim() && (
          <Text variant="body-default-s" onBackground="neutral-weak" wrap="balance">
            {description}
          </Text>
        )}
        <Flex gap="16" marginTop="8" wrap>
          <SmartLink href={href} suffixIcon="arrowRight">
             <Text variant="label-default-s">Read more</Text>
          </SmartLink>
          {link && (
            <SmartLink href={link} suffixIcon="arrowUpRightFromSquare">
              <Text variant="label-default-s">View project</Text>
            </SmartLink>
          )}
        </Flex>
      </Column>
    </Flex>
  );
};
