import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'p64sv7j3',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'skyxTYnhPdXtwCrOQ5WxJJnsq4eBhAnBIDCqr7xh69Q86ZOBb1cAeVQFlphcTvnnQaVlUeCV23gYZ1FVaJIAvLepaHpOxzlP7ALyWh0jDJxQ4SL22Ome5m0DqzUN9BLwRBVxcHki9NLS04GPHQSX6l5YlEMH35c7clGxVdi971fMfAyrSEyq',
  useCdn: false,
})
