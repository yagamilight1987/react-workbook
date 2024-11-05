# Adding a New Language to the Project

This guide explains how to add support for a new language to the website.

## Steps to Add a New Language

1. Create a new translation file:
   - Go to the `messages` directory
   - Create a new JSON file named with the language code (e.g., `fr.json` for French)
   - Copy the structure from `en.json`
   - Translate all the strings to the new language

2. Update the middleware:
   - Open `middleware.ts`
   - Add the new locale code to the `locales` array

3. Add the language to the selector:
   - Open `components/LanguageSelector.tsx`
   - Add a new `SelectItem` with the language code and name

## Translation File Structure

The translation files follow this structure:

```json
{
  "hero": {
    "title": "Your title in the new language",
    "subtitle": "Your subtitle in the new language",
    "cta": "Call to action in the new language"
  },
  // ... other sections
}
```

## Best Practices

1. Maintain consistent keys across all language files
2. Use proper character encoding for non-Latin scripts
3. Test the new language thoroughly
4. Consider RTL support if adding languages like Arabic or Hebrew

## Testing

After adding a new language:

1. Test the language selector
2. Verify all translations appear correctly
3. Check for layout issues with longer/shorter text
4. Ensure proper fallback to default language

## Need Help?

Contact the development team if you need assistance with:
- Translation verification
- Technical implementation
- Character encoding issues
- RTL support