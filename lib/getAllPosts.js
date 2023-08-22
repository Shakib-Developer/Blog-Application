
export default async function getAllPosts() {
    const res = await fetch("https://basic-blog.teamrabbil.com/api/post-newest?_limit=5")

    if (!res.status===200) {
        throw new Error('Posts Error Problem');
    }
    return res.json();
};

