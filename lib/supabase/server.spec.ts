import { createClient } from './server';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

jest.mock('@supabase/ssr', () => ({
  createServerClient: jest.fn(() => ({
    auth: {
      getUser: jest.fn(),
    },
    from: jest.fn(() => ({
      select: jest.fn(),
    })),
  })),
}));
jest.mock('next/headers');

describe('createClient', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should initialize supabase client with correct configuration', () => {
    const mockCookieStore = {
      getAll: jest.fn(),
      set: jest.fn(),
    };

    (cookies as jest.Mock).mockReturnValue(mockCookieStore);

    createClient();

    expect(createServerClient).toHaveBeenCalledWith(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll: expect.any(Function),
          setAll: expect.any(Function),
        },
      },
    );

    const cookiesConfig = (createServerClient as jest.Mock).mock.calls[0][2].cookies;

    cookiesConfig.getAll();
    expect(mockCookieStore.getAll).toHaveBeenCalled();

    const cookiesToSet = [
        { name: 'cookie1', value: 'value1', options: {} },
        { name: 'cookie2', value: 'value2', options: {} },
      ];
      cookiesConfig.setAll(cookiesToSet);
      cookiesToSet.forEach(({ name, value, options }) => {
        expect(mockCookieStore.set).toHaveBeenCalledWith(name, value, options);
      });
  });

  it('should mock Supabase methods correctly', async () => {
    const mockUser = { id: 'user_id', email: 'test@example.com' };
    const supabase = createClient();

    (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({
      data: { user: mockUser },
      error: null,
    });
    (supabase.from as jest.Mock).mockReturnValue({
      select: jest.fn().mockResolvedValueOnce({
        data: [mockUser],
        error: null,
      }),
    });

    const { data: sessionData } = await supabase.auth.getUser();
    const { data: users } = await supabase.from('users').select('*');

    expect(sessionData.user).toEqual(mockUser);
    expect(users).toEqual([mockUser]);
  });
});
