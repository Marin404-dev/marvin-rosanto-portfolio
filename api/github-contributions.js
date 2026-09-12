const GITHUB_LOGIN = "Marin404-dev";

export default async function handler(request, response) {
  if (request.method !== "GET") {
    return response.status(405).json({ error: "Method not allowed" });
  }

  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return response
      .status(503)
      .json({ error: "GitHub activity is not configured yet." });
  }

  const to = new Date();
  const from = new Date(to);
  from.setFullYear(to.getFullYear() - 1);

  const query = `
    query($login: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $login) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
                weekday
              }
            }
          }
        }
      }
    }
  `;

  try {
    const githubResponse = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/vnd.github+json",
      },
      body: JSON.stringify({
        query,
        variables: {
          login: GITHUB_LOGIN,
          from: from.toISOString(),
          to: to.toISOString(),
        },
      }),
    });

    const payload = await githubResponse.json();

    if (!githubResponse.ok || payload.errors || !payload.data?.user) {
      return response
        .status(502)
        .json({ error: "Unable to retrieve GitHub activity." });
    }

    return response
      .status(200)
      .json(payload.data.user.contributionsCollection.contributionCalendar);
  } catch {
    return response
      .status(502)
      .json({ error: "Unable to retrieve GitHub activity." });
  }
}
