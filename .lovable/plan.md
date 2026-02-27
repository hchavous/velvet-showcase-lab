

## Add Tabs to Experience Page: Full Time + Consulting

### Overview
Add a tabbed interface to the Experience page with two tabs: **Full Time** (current content) and **Consulting Clients** (new section).

### Changes

**`src/pages/Experience.tsx`**
1. Import `Tabs, TabsList, TabsTrigger, TabsContent` from `@/components/ui/tabs`
2. Add a `consultingClients` data array (same `Experience` interface) — I'll need you to provide the client names, roles, periods, and highlights. For now I can stub it with the existing "Self-Employed / Financial Consultant" entry and any clients you'd like to list.
3. Wrap the experience cards in a `<Tabs defaultValue="fulltime">` component:
   - Tab triggers: "Full Time" and "Consulting Clients"
   - Each tab renders its respective card list using the same card component

### Layout
```text
┌─────────────────────────────────────┐
│   Professional Experience           │
│   15+ years of finance...           │
│                                     │
│   [ Full Time ]  [ Consulting ]     │
│                                     │
│   ┌─────────────────────────────┐   │
│   │  Experience Card            │   │
│   └─────────────────────────────┘   │
│   ┌─────────────────────────────┐   │
│   │  Experience Card            │   │
│   └─────────────────────────────┘   │
└─────────────────────────────────────┘
```

### What I need from you
Before implementing, could you share the consulting clients you want listed? For each, I'd need:
- Client/company name
- Your role/title
- Date range
- Location
- Key highlights/bullets

I can also move the existing "Self-Employed / Financial Consultant" entry to the Consulting tab if that makes sense.

