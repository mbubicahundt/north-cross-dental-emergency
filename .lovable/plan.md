

## Plan: Fix Sticky Mobile Footer Layout

**What changes**: Update `src/components/StickyMobileFooter.tsx` to:
1. Change text from "Call Emergency Dentist" to "Call Northcross Dental"
2. Stack the label and phone number on two separate lines using `flex-col`
3. Use `btn-promo` instead of `btn-emergency` (consistent with the seafoam green update)

**Single file**: `src/components/StickyMobileFooter.tsx`

The button will display:
```
Call Northcross Dental
📞 (704) 420-6900
```

Two lines, centered, with the phone icon next to the number on the second line.

