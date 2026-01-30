# Builder.io CMS Integration Guide

Your website now has Builder.io CMS integrated with three content models ready to use:

## Available CMS Models

### 1. **Service** Model
Manage your services/offerings easily without code changes.

**Fields:**
- `title` (required) - Service name
- `description` (required) - Full service description
- `shortDescription` - Brief description
- `image` - Service image
- `features` - List of features/benefits
- `order` - Sort order

**How to add a service:**
1. Go to your Builder.io space
2. Click on "Service" model
3. Create a new entry with service details
4. The service will automatically appear on your Services page

### 2. **Hero Content** Model (Singleton)
Customize your homepage hero section.

**Fields:**
- `headline` (required) - Main heading
- `subheadline` - Sub-heading text
- `primaryButtonText` - CTA button text
- `secondaryButtonText` - Secondary button text

**How to use:**
Edit the single hero content entry to update your homepage hero without editing code.

### 3. **Testimonial** Model
Add and manage client testimonials.

**Fields:**
- `quote` (required) - Testimonial text
- `author` (required) - Person's name
- `company` - Company/organization name
- `image` - Author's photo

**How to add a testimonial:**
1. Create new testimonial entries in Builder.io
2. They will automatically display on relevant pages

## Configuration

### Step 1: Get Your Builder.io API Key
1. Log in to your Builder.io space
2. Go to **Settings** → **API Keys**
3. Copy your **Public Key**

### Step 2: Set Environment Variable
Set your Builder.io public key in your environment:

```bash
VITE_PUBLIC_BUILDER_KEY=your_api_key_here
```

You can set this via:
- DevServerControl tool: `set_env_variable ["VITE_PUBLIC_BUILDER_KEY", "your_key"]`
- Or in your `.env` file

### Step 3: Using the CMS Hook

The custom React hook `useBuilderContent` is available for fetching CMS content:

```typescript
import { useBuilderContent } from "@/hooks/use-builder-cms";

export function MyComponent() {
  const { data: services, isLoading, error } = useBuilderContent("service");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading services</div>;

  return (
    <div>
      {services?.map((service) => (
        <div key={service.id}>
          <h2>{service.data.title}</h2>
          <p>{service.data.description}</p>
        </div>
      ))}
    </div>
  );
}
```

## Integration Examples

### Fetching Single Content (Singleton)
```typescript
const { data: heroContent } = useBuilderSingleContent("hero-content");

if (heroContent) {
  return <h1>{heroContent.data.headline}</h1>;
}
```

### Fetching Multiple Items with Options
```typescript
const { data: testimonials } = useBuilderContent("testimonial", {
  limit: 10,
  offset: 0,
});
```

## Data Cache
- Content is cached for 5 minutes by default
- Automatically refetches when data becomes stale
- Uses React Query for efficient state management

## Best Practices

1. **Always provide fallback content** - In case CMS is unavailable or loading
2. **Use loading states** - Show skeleton loaders while fetching
3. **Handle errors gracefully** - Display fallback UI if CMS fails
4. **Sort by order field** - Use the `order` field on services for custom sorting

## Next Steps

1. Go to your Builder.io space
2. Add your first service entry
3. Update your API key in environment variables
4. Your content will automatically sync to the website

For more info: https://builder.io/c/docs/apis
