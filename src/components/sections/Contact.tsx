import { Box, Typography, Grid, Stack, IconButton, Tooltip } from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  LinkedIn,
  GitHub,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import ContactForm from '../ui/ContactForm';
import { SITE } from '../../config/site';
import { useSectionInView } from '../../hooks/useSectionInView';

// Custom Medium icon
const MediumIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </svg>
);

interface ContactProps {
  setActiveSection: (section: string) => void;
}

const Contact = ({ setActiveSection }: ContactProps) => {
  const { ref } = useSectionInView('contact', setActiveSection);

  const contactInfo = [
    {
      icon: <Email />,
      label: 'Email',
      value: SITE.contact.email,
      href: `mailto:${SITE.contact.email}`,
    },
    {
      icon: <Phone />,
      label: 'Phone',
      value: SITE.contact.phone,
      href: `tel:${SITE.contact.phone.replace(/[^+\d]/g, '')}`,
    },
    {
      icon: <LocationOn />,
      label: 'Location',
      value: SITE.contact.location,
    },
  ];

  const socialLinks = [
    { icon: <LinkedIn />, url: SITE.social.linkedin, label: 'LinkedIn' },
    { icon: <GitHub />, url: SITE.social.github, label: 'GitHub' },
    { icon: <MediumIcon />, url: SITE.social.medium, label: 'Medium' },
  ];

  return (
    <Box ref={ref}>
      <Section
        id="contact"
        title="Let's Build Something"
        subtitle="Whether you need a reliable backend, an AI integration, or a full-stack solution—I'm here to help."
      >
        <Grid container spacing={6}>
          {/* Contact Info */}
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Box
                sx={{
                  p: 4,
                  bgcolor: 'background.paper',
                  borderRadius: 3,
                  border: 1,
                  borderColor: 'divider',
                  height: '100%',
                }}
              >
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{ mb: 3, fontWeight: 600 }}
                >
                  Contact Information
                </Typography>

                <Stack spacing={3}>
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Box
                        component={info.href ? 'a' : 'div'}
                        href={info.href}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                          textDecoration: 'none',
                          color: 'inherit',
                          p: 2,
                          borderRadius: 2,
                          transition: 'all 0.2s ease',
                          '&:hover': info.href
                            ? {
                                bgcolor: 'action.hover',
                                color: 'primary.main',
                              }
                            : {},
                        }}
                      >
                        <Box
                          sx={{
                            p: 1.5,
                            borderRadius: 2,
                            bgcolor: 'primary.main',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          {info.icon}
                        </Box>
                        <Box>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ mb: 0.25 }}
                          >
                            {info.label}
                          </Typography>
                          <Typography variant="body1" sx={{ fontWeight: 500 }}>
                            {info.value}
                          </Typography>
                        </Box>
                      </Box>
                    </motion.div>
                  ))}
                </Stack>

                {/* Social Links */}
                <Box sx={{ mt: 4, pt: 3, borderTop: 1, borderColor: 'divider' }}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    Connect with me
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    {socialLinks.map((social) => (
                      <Tooltip key={social.label} title={social.label}>
                        <IconButton
                          component="a"
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: 'text.secondary',
                            border: 1,
                            borderColor: 'divider',
                            '&:hover': {
                              color: 'primary.main',
                              borderColor: 'primary.main',
                              bgcolor: (theme) =>
                                theme.palette.mode === 'dark'
                                  ? 'rgba(59, 130, 246, 0.1)'
                                  : 'rgba(59, 130, 246, 0.05)',
                            },
                          }}
                        >
                          {social.icon}
                        </IconButton>
                      </Tooltip>
                    ))}
                  </Stack>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Contact Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Box
                sx={{
                  p: 4,
                  bgcolor: 'background.paper',
                  borderRadius: 3,
                  border: 1,
                  borderColor: 'divider',
                  position: 'relative',
                }}
              >
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{ mb: 3, fontWeight: 600 }}
                >
                  Send a Message
                </Typography>
                <ContactForm />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Section>
    </Box>
  );
};

export default Contact;
