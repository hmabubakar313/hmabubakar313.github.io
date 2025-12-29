import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Snackbar,
  Alert,
  CircularProgress,
} from '@mui/material';
import { Send } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import type { ContactFormData } from '../../types';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
  honeypot: z.string().max(0, 'Bot detected').optional(),
});

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: 'success' | 'error';
  }>({
    open: false,
    message: '',
    severity: 'success',
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Check honeypot
    if (data.honeypot) {
      console.log('Bot detected');
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Connect to backend API
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data)
      // });
      // if (!response.ok) throw new Error('Failed to send message');

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSnackbar({
        open: true,
        message: 'Message sent successfully! I\'ll get back to you soon.',
        severity: 'success',
      });
      reset();
    } catch {
      setSnackbar({
        open: true,
        message: 'Failed to send message. Please try again or email me directly.',
        severity: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
      >
        {/* Honeypot field - hidden from users */}
        <Box
          sx={{
            position: 'absolute',
            left: '-9999px',
            opacity: 0,
            height: 0,
            overflow: 'hidden',
          }}
          aria-hidden="true"
        >
          <TextField
            {...register('honeypot')}
            tabIndex={-1}
            autoComplete="off"
          />
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <TextField
            {...register('name')}
            label="Name"
            fullWidth
            error={!!errors.name}
            helperText={errors.name?.message}
            disabled={isSubmitting}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
              },
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <TextField
            {...register('email')}
            label="Email"
            type="email"
            fullWidth
            error={!!errors.email}
            helperText={errors.email?.message}
            disabled={isSubmitting}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
              },
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <TextField
            {...register('message')}
            label="Message"
            multiline
            rows={5}
            fullWidth
            error={!!errors.message}
            helperText={errors.message?.message}
            disabled={isSubmitting}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
              },
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Button
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            disabled={isSubmitting}
            endIcon={
              isSubmitting ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                <Send />
              )
            }
            component={motion.button}
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            sx={{
              py: 1.5,
              fontSize: '1rem',
            }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </motion.div>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ContactForm;
